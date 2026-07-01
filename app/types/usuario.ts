import type { Perfil, NombrePerfil } from './perfil'

export interface Usuario {
  id: number
  perfil_id: number
  rut: string
  nombres: string
  apellidos: string
  email: string
  activo: boolean
  created_at?: string
  updated_at?: string
  perfiles?: Perfil
}

export interface UsuarioSesion {
  id: number
  rut: string
  nombres: string
  apellidos: string
  email: string
  perfilId: number
  perfilNombre: NombrePerfil
}