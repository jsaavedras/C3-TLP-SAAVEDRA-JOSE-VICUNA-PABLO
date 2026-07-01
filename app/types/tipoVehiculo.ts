export interface TipoVehiculo {
  id: number
  nombre: string
  descripcion: string
  valor_diario: number
  activo: boolean
  created_at?: string
  updated_at?: string
}