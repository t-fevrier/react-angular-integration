import {
  Component,
  OnChanges,
  Input,
  Output,
  EventEmitter,
  AfterViewInit,
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from '@gravitee-io/gravitee-ui-mindmap';

@Component({
  selector: 'react-button',
  template: '<div [id]="rootId"></div>',
})
export class ButtonComponent implements OnChanges, AfterViewInit {
  @Input() disabled: boolean = false;
  @Output() submitEvent = new EventEmitter<string>();

  public rootId = 'button-root';
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
      disabled: this.disabled,
      onSubmit: (res: string) => this.submitEvent.emit(res),
    };

    ReactDOM.render(
      React.createElement(Button, props),
      document.getElementById(this.rootId)
    );
  }
}
