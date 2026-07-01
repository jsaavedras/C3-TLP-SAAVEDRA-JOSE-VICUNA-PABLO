import type { Cliente } from './cliente'
import type { Vehiculo } from './vehiculo'
import type { Usuario } from './usuario'

export type EstadoArriendo = 'vigente' | 'finalizado'

export interface Arriendo {
  id: number

  cliente_id: number
  vehiculo_id: number
  usuario_id: number

  fecha_inicio: string
  fecha_termino: string
  fecha_hora_entrega: string
  fecha_hora_recepcion?: string | null

  valor_diario_aplicado: number
  dias_arriendo: number
  valor_total: number

  estado: EstadoArriendo

  fotos_entrega: string
  fotos_recepcion?: string | null

  vehiculo_activo_id?: number | null

  created_at?: string
  updated_at?: string

  clientes?: Cliente
  vehiculos?: Vehiculo
  usuarios?: Pick<Usuario, 'nombres' | 'apellidos' | 'email'>
}