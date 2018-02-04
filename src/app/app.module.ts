import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { ToolbarComponent } from './toolbar.component';
import { ProgressComponent } from './progress.component';
import { OptionsComponent } from './options.component';
import { TimeDisplayPipe } from './timedisplay.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ProgressComponent,
    OptionsComponent,
    TimeDisplayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [
  	AppComponent
  ]
})
export class AppModule { }
