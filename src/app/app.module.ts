import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MindmapComponent } from './react-components/mindmap.component';
import { MindmapWrapperComponent } from './mindmap-wrapper';
import { SimpleComponentWrapper } from './simple-react-component';

@NgModule({
  declarations: [AppComponent, MindmapComponent, MindmapWrapperComponent, SimpleComponentWrapper],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
