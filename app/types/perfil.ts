export type NombrePerfil = 'administrador' | 'ejecutivo'; // creamos un tipo llamado NombrePerfil que puede ser 'administrador' o 'ejecutivo'

export interface Perfil {
  id: number; // identificador único del perfil
  nombre: NombrePerfil; // nombre del perfil, que debe ser uno de los valores definidos en NombrePerfil
}