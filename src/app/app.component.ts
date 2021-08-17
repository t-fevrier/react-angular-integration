import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import productsModel from '../assets/products.model.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-app';
  model = productsModel;
  currentNode = productsModel.data;

  saveModel($event: any) {
    console.log($event);
  }

  onNodeSelect($event: any) {
    this.currentNode = $event.currentNode;
  }

  changeColor(node, color) {
    node.branchColor = color;

    if (node.children.length > 0) {
      node.children = node.children.map((childNode) => {
        return this.changeColor(childNode, color);
      });
    }

    return node;
  }

  replaceNode(data: any, nodeToReplace: any) {
    if (data.nodeKey === nodeToReplace.nodeKey) {
      data = nodeToReplace;
    } else {
      data.children = data.children.map((child) => {
        return this.replaceNode(child, nodeToReplace);
      });
    }

    return data;
  }

  onSubmit(form: NgForm): void {
    const updatedNode = this.changeColor(this.currentNode, form.value.color);
    this.model.data = this.replaceNode(this.model.data, updatedNode);
  }
}
