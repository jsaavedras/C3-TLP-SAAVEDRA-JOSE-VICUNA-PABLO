import prisma from '../../utils/prisma'
import { compare } from 'bcryptjs'
import type { UsuarioSesion } from '../../../app/types/usuario'

function normalizarPerfil(nombre: string): UsuarioSesion['perfilNombre'] {
  if (nombre === 'administrador' || nombre === 'ejecutivo') {
    return nombre
  }

  throw createError({
    statusCode: 403,
    statusMessage: 'Perfil de usuario no autorizado'
  })
}



export default defineEventHandler(async (event) => { // definimos un manejador de eventos asíncrono para manejar la solicitud de inicio de sesión

  const body = await readBody(event) || {} // leemos el cuerpo de la solicitud entrante y lo almacenamos en la variable body

  const email = String(body.email || '').trim().toLowerCase()
  const password = String(body.password || '')
  const mensajeCredencialesInvalidas = 'Credenciales invalidas'

  if (!email || !password) { // verificamos si el correo electrónico o la contraseña no están presentes en el cuerpo de la solicitud. Si alguno de ellos falta, lanzamos un error con un código de estado 400 y un mensaje indicando que se deben ingresar ambos campos para iniciar sesión.
    throw createError({ // creamos un error personalizado usando la función createError
      statusCode: 400,
      statusMessage: 'debe ingresar correo y contraseña para iniciar sesión'
    })
  }
  const usuario = await prisma.usuarios.findUnique({ // buscamos un usuario en la base de datos que coincida con el correo electrónico proporcionado
    where: {
      email
    },
    include: {
      perfiles: true
    }
  })

  if (!usuario) { // verificamos si no se encontró un usuario con el correo electrónico proporcionado. Si no se encuentra, lanzamos un error con un código de estado 401 y un mensaje indicando que el usuario no fue encontrado.
    throw createError({
      statusCode: 401,
      statusMessage: mensajeCredencialesInvalidas
    })
  }

  if (!usuario.activo) {
    throw createError({
      statusCode: 403,
      statusMessage: 'Usuario inactivo'
    })
  }

  const passwordMatch = await compare(password, usuario.password_hash) // comparamos la contraseña proporcionada con la contraseña almacenada en la base de datos utilizando la función compare de bcryptjs. Esto devuelve un valor booleano que indica si las contraseñas coinciden o no.

  if (!passwordMatch) { // verificamos si las contraseñas no coinciden. Si no coinciden, lanzamos un error con un código de estado 401 y un mensaje indicando que la contraseña es incorrecta.
    throw createError({
      statusCode: 401,
      statusMessage: mensajeCredencialesInvalidas
    })
  }

  const usuarioSesion: UsuarioSesion = { // creamos un objeto usuarioSesion que contiene la información del usuario que se almacenará en la sesión. Este objeto tiene el tipo UsuarioSesion, que es una interfaz definida en app/types/usuario.ts.
    id: usuario.id,
    rut: usuario.rut,
    nombres: usuario.nombres,
    apellidos: usuario.apellidos,
    email: usuario.email,
    perfilId: usuario.perfil_id,
    perfilNombre: normalizarPerfil(usuario.perfiles.nombre)
  }

  await setUserSession(event, { // llamamos a la función setUserSession para establecer la sesión del usuario. Esta función probablemente se encarga de almacenar la información del usuario en la sesión del servidor.
    user: usuarioSesion
  })
  return {
    ok: true,
    mensaje: 'inicio de sesión exitoso'
  } // devolvemos un objeto con un mensaje indicando que el inicio de sesión fue exitoso.
})
