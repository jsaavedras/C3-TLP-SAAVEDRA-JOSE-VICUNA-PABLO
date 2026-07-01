import type { TipoVehiculo } from './tipoVehiculo'

export type EstadoVehiculo =
  | 'disponible'
  | 'arrendado'
  | 'en_mantenimiento'
  | 'de_baja'

export interface Vehiculo {
  id: number
  tipo_id: number
  patente: string
  marca: string
  modelo: string
  anio: number
  color: string
  estado: EstadoVehiculo
  foto_url: string
  activo: boolean
  created_at?: string
  updated_at?: string
  tipos_vehiculo?: TipoVehiculo
}