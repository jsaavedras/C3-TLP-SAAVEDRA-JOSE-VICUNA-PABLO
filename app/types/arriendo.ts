import type { Cliente } from './cliente'
import type { Vehiculo } from './vehiculo'

export interface Arriendo {
  id: number
  cliente?: Cliente
  vehiculo?: Vehiculo
  fechaInicio: string
  fechaFin?: string
}
