import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {Angular3dComponent} from '../../../angular3d/src/lib/angular3d.component';
import {RubiksCubeComponent} from './models/rubiks-cube/rubiks-cube.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('angular3dComponent')
  angular3dComponent?: Angular3dComponent;

  constructor() {
  }

  rotateOverX(a: number): void {
    this.angular3dComponent?.rotateOverX(a);
  }

  rotateOverY(a: number): void {
    this.angular3dComponent?.rotateOverY(a);
  }

  rotateOverZ(a: number): void {
    this.angular3dComponent?.rotateOverZ(a);
  }

  ngAfterViewInit(): void {
    if (this.angular3dComponent) {
      this.angular3dComponent.sceneParameters = RubiksCubeComponent.getRubiksCube();
      this.angular3dComponent.show();
    }
  }
}
