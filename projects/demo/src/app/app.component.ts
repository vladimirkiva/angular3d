import {Component, ViewChild} from '@angular/core';
import {Angular3dComponent} from '../../../angular3d/src/lib/angular3d.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('angular3dComponent')
  angular3dComponent?: Angular3dComponent;

  rotateOverX(a: number): void {
    this.angular3dComponent?.rotateOverX(a);
  }

  rotateOverY(a: number): void {
    this.angular3dComponent?.rotateOverY(a);
  }

  rotateOverZ(a: number): void {
    this.angular3dComponent?.rotateOverZ(a);
  }
}
