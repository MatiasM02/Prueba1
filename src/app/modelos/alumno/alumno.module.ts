export type seccion = 'PGY4121' | 'PGY4122' | 'PGY4123';

export interface Alumno{
  rut: string,
  nombre: string,
  apellido: string,
  edad: number,
  seccion: seccion,
}
