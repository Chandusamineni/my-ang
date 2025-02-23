import { Component, Input } from '@angular/core';
import { IProperty } from '../property-list/IProperty.interface';

@Component({
  selector: 'app-property-card',
  imports: [],
  templateUrl: './property-card.component.html',
  styleUrl: './property-card.component.css'
})
export class PropertyCardComponent {

  @Input() property!: IProperty
  

}
