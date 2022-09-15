import { Component, Input} from '@angular/core';
import { Registro_Historial } from './../../modelos/registro-historial/registro-historial.module';

@Component({
  selector: 'app-historial',
  templateUrl: './historial.component.html',
  styleUrls: ['./historial.component.scss']
})
export class HistorialComponent{
  @Input() public registro!: Registro_Historial;
}
