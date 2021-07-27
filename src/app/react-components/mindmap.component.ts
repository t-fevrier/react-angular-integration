import {
  Component,
  OnChanges,
  Output,
  EventEmitter,
  AfterViewInit,
  Input,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MindmapView } from '@gravitee-io/gravitee-ui-mindmap';
import productsModel from '../../assets/products.model.js';

@Component({
  selector: 'react-mindmap',
  template: '<div [id]="rootId"></div>',
})
export class MindmapComponent implements OnChanges, AfterViewInit {
  @Input() model: any;
  @Output() saveModel = new EventEmitter<any>();

  public rootId = 'mindmap-root';
  private hasViewLoaded = false;

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.hasViewLoaded) {
      return;
    }

    const props = {
      model: productsModel,
      saveModel: (res: any) => this.saveModel.emit(res),
    };

    ReactDOM.render(
      React.createElement(MindmapView, props),
      document.getElementById(this.rootId)
    );
  }
}
