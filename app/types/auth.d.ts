import type { UsuarioSesion } from './usuario'


// Extiende la interfaz User con las propiedades de UsuarioSesion
declare module '#auth-utils' {
  interface User extends UsuarioSesion {}
}

export {}