import { NgModule } from '@angular/core';
import { Angular3dComponent } from './angular3d.component';
import { SceneComponent } from './scene/scene.component';



@NgModule({
  declarations: [Angular3dComponent, SceneComponent],
  imports: [
  ],
  exports: [Angular3dComponent]
})
export class Angular3dModule { }
