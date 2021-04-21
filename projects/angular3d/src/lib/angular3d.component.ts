import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SceneParameters} from './model/scene-parameters';
import {SceneComponent} from './scene/scene.component';

@Component({
  selector: 'lib-angular3d',
  templateUrl: './angular3d.component.html',
  styles: []
})
export class Angular3dComponent implements OnInit {

  @Input()
  sceneUrl?: string;

  @ViewChild('scene')
  private scene?: SceneComponent;

  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
    if (this.sceneUrl) {
      this.http.get<SceneParameters>(this.sceneUrl).subscribe(
        (resp: SceneParameters) => {
          if (this.scene) {
            this.scene.setParameters(resp);
            if (this.valid()) {
              this.show();
            }
          }
        }
      );
    }
  }

  private valid(): boolean {
    return true;
  }

  private show(): void {
    this.scene?.draw();
  }

  public rotateOverX(a: number): void {
    this.scene?.rotateOverX(a);
    this.show();
  }

  public rotateOverY(a: number): void {
    this.scene?.rotateOverY(a);
    this.show();
  }

  public rotateOverZ(a: number): void {
    this.scene?.rotateOverZ(a);
    this.show();
  }
}
