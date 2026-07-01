export interface Cliente {
  id: number
  rut: string
  nombres: string
  apellidos: string
  email: string
  telefono: string
  direccion: string
  licencia_conducir: string
  activo: boolean
  created_at?: string
  updated_at?: string
}