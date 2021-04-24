import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Angular3dModule} from '../../../angular3d/src/lib/angular3d.module';
import {HttpClientModule} from '@angular/common/http';
import { RubiksCubeComponent } from './models/rubiks-cube/rubiks-cube.component';

@NgModule({
  declarations: [
    AppComponent,
    RubiksCubeComponent
  ],
  imports: [
    BrowserModule,
    Angular3dModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
