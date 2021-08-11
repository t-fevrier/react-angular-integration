import { Component } from '@angular/core';
import productsModel from '../assets/products.model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  model = productsModel;

  saveModel($event: any) {
    console.log($event);
  }

  onClick($event: any) {
    this.model.data.name += '-';
  }
}
