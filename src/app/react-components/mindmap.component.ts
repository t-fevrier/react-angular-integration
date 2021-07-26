import {
  Component,
  OnChanges,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { MindmapView } from '@gravitee-io/gravitee-ui-mindmap';
import '@gravitee-io/gravitee-ui-mindmap/dist/index.cjs.css';

@Component({
  selector: 'react-mindmap',
  template: '<div [id]="rootId"></div>',
})
export class MindmapComponent implements OnChanges, AfterViewInit {
  @Output() submitEvent = new EventEmitter<string>();

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
      onSubmit: (res: string) => this.submitEvent.emit(res),
    };

    ReactDOM.render(
      React.createElement(MindmapView, props),
      document.getElementById(this.rootId)
    );
  }
}
