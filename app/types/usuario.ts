import type { Perfil } from './perfil'

export interface Usuario {
  id: number
  nombre: string
  email: string
  perfil?: Perfil
}
