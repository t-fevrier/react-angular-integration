import {Component, OnInit} from '@angular/core';
import productsModel from '../assets/products.model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  model: any;

  count = 0;

  ngOnInit(): void {
    this.model = { ...productsModel};

    console.log("Model initialised", this.model);
  }

  public increment() {
    this.count++;
  }



  saveModel($event: any) {
    console.log("Model saved", $event);
  }

  onClick($event: any) {
    this.model = {
      data: {
      ...productsModel.data,
        name: "toto-" + this.count++
      }
    };
    console.log("Model updated", this.model);
  }
}
