import {
  AfterViewInit,
  Component,
  ElementRef, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {MindmapView} from '@gravitee-io/gravitee-ui-mindmap';


const containerElementName = 'mindmapContainer';

@Component({
  selector: 'app-mindmap',
  template: `<span #${containerElementName}></span>`,
  encapsulation: ViewEncapsulation.None,
})
export class MindmapWrapperComponent implements OnChanges, OnDestroy, AfterViewInit {
  @ViewChild(containerElementName) containerRef: ElementRef | undefined;

  @Input() model: any;
  @Output() modelUpdated = new EventEmitter<any>();

  ngAfterViewInit(): void {
    this.render();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.render();
  }

  ngOnDestroy(): void {
    ReactDOM.unmountComponentAtNode(this.containerRef?.nativeElement);
  }

  private render() {
    if (this.containerRef) {
      const element = React.createElement(MindmapView, this.getProps());
      console.log("Render component", element)
      ReactDOM.render(element, this.containerRef?.nativeElement);
    }
  }

  private getProps() {
    return {
      model: this.model,
      saveModel: (res: any) => this.modelUpdated.emit(res),
    };
  }
}
