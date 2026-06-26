import type { TipoVehiculo } from './tipoVehiculo'

export interface Vehiculo {
  id: number
  patente: string
  marca: string
  modelo: string
  tipo?: TipoVehiculo
}
