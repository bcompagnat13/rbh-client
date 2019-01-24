import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Special} from '../special';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent {

  @Input()
  special: Special;

  @Input()
  buttonText: string;

  constructor() { }

  buttonClicked() {
    alert("Plate added to cart");
  }
}
