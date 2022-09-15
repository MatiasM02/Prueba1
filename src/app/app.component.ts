import { Component } from '@angular/core';
import { Alumno } from './modelos/alumno/alumno.module'
import { Registro_Historial } from './modelos/registro-historial/registro-historial.module';
import { Seccion } from './modelos/seccion/seccion.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public listaAlumno: Array<Alumno> = [
    {
      rut: '12345678-9',
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 20,
      seccion: 'PGY4121',
    },
    {
      rut: '98765432-1',
      nombre: 'Alexis',
      apellido: 'Sanchez',
      edad: 25,
      seccion: 'PGY4121',
    }
  ]

  public listaSeccion: Array<Seccion> = [
    {
      id: 0,
      nombre_seccion: '',
    },

  ]

  public escucharAlumno(nuevoA: Alumno): void {
    this.listaAlumno.push(nuevoA);
  }

  public escucharSeccion(nuevaS: Seccion): void {
    this.listaSeccion.push(nuevaS);
  }
}
