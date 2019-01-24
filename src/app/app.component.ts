import { Component } from '@angular/core';
import {LicensePlate} from './license-plate';
import {Special} from './special';
import {LicensePlateService} from './license-plate.service';
import {SpecialService} from './special.service';
import {Observable} from 'rxjs';
import {CartService} from './cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  specials: Observable<Special[]>;
  showPopup = false;

  constructor(private service: SpecialService) {
    this.specials = this.service.getList();
  }

  addToCart(plate: LicensePlate) {
    //this.cartService.addToCart(plate).subscribe(() => this.showPopup = true);
  }
}
