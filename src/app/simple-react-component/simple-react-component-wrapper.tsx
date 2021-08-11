import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnDestroy,
  Output,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {SimpleReactComponent} from './simple-react-component';

const containerElementName = 'myReactComponentContainer';

@Component({
  selector: 'app-my-component',
  template: `<span #${containerElementName}></span>`,
  styleUrls: ['./simple-react-component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class SimpleComponentWrapper implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName, {static: false}) containerRef: ElementRef | undefined;

  @Input() public counter = 10;
  @Output() public componentClick = new EventEmitter<void>();

  constructor() {
    this.handleDivClicked = this.handleDivClicked.bind(this);
  }

  public handleDivClicked() {
    if (this.componentClick) {
      this.componentClick.emit();
      this.render();
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngAfterViewInit() {
    this.render();
  }

  ngOnDestroy() {
    ReactDOM.unmountComponentAtNode(this.containerRef?.nativeElement);
  }

  private render() {
    if (this.containerRef) {

      const {counter} = this;

      const element = React.createElement(SimpleReactComponent, {
        counter,
        onClick: this.handleDivClicked
      });

      ReactDOM.render(<div
        className={'i-am-classy'}>{element}</div>, this.containerRef?.nativeElement);
    }
  }
}
