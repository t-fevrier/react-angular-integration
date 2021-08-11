import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MindmapComponent } from './react-components/mindmap.component';
import { MindmapWrapperComponent } from './mindmap-wrapper';

@NgModule({
  declarations: [AppComponent, MindmapComponent, MindmapWrapperComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
