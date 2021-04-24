import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SceneParameters} from '../model/scene-parameters';
import {Polygon} from '../model/polygon';
import {Point} from '../model/point';

@Component({
  selector: 'lib-scene',
  templateUrl: './scene.component.svg',
  styleUrls: ['./scene.component.css']
})
export class SceneComponent implements OnInit {

  constructor() { }

  private sceneParameters?: SceneParameters;

  @ViewChild('svgElement')
  private svgElement?: ElementRef;

  private static getSvgPolygon(polygon: Polygon): string {
    let result = polygon.points.map(
      p => p.x + ' ' + p.y
    ).join(',');

    result = '<polygon points="' + result + '" ';
    if (polygon.fill) {
      result += 'fill="' + polygon.fill + '" ';
    }
    if (polygon.stroke) {
      result += 'stroke="' + polygon.stroke + '" stroke-linejoin="round" ';
    }
    if (polygon.strokeWidth) {
      result += 'stroke-width="' + polygon.strokeWidth + '" ';
    }
    if (polygon.id) {
      result += 'id="' + polygon.id + '"';
    }
    return result + '/>';
  }

  // TODO sin and cos to be passed as argument so as not to calculate it multiple times
  private static rotatePointOverX(a: number, p: Point, c: Point): void {
    const y = p.y - c.y;
    const z = p.z - c.z;
    const dSin = Math.sin(a);
    const dCos = Math.cos(a);
    p.y = c.y + dCos * y + dSin * z;
    p.z = c.z - dSin * y + dCos * z;
  }

  public static rotatePointOverY(a: number, p: Point, c: Point): void {
    const z = p.z - c.z;
    const x = p.x - c.x;
    const dSin = Math.sin(a);
    const dCos = Math.cos(a);
    p.z = c.z + dCos * z + dSin * x;
    p.x = c.x - dSin * z + dCos * x;
  }

  private static rotatePointOverZ(a: number, p: Point, c: Point): void {
    const x = p.x - c.x;
    const y = p.y - c.y;
    const dSin = Math.sin(a);
    const dCos = Math.cos(a);
    p.x = c.x + dCos * x + dSin * y;
    p.y = c.y - dSin * x + dCos * y;
  }

  ngOnInit(): void {
  }

  setParameters(sceneParameters: SceneParameters): void {
    this.sceneParameters = sceneParameters;
    if (this.svgElement && this.sceneParameters?.viewBox) {
      const v = this.sceneParameters.viewBox;
      this.svgElement.nativeElement.setAttribute('viewBox', `${v.minX} ${v.minY} ${v.width} ${v.height}`);
    }
}

  draw(): void {
    this.sort();
    if (this.svgElement && this.sceneParameters?.polygons) {
      this.svgElement.nativeElement.innerHTML = this.sceneParameters.polygons.map(
        p => SceneComponent.getSvgPolygon(p)
      ).join(' ');
    }
  }

  private sort(): void {
    if (this.sceneParameters?.polygons) {
      this.sceneParameters.polygons.sort(
        (a, b) => a.center.z - b.center.z
      );
    }
  }

  rotateOverX(a: number): void {
    const center = this.sceneParameters?.center;
    if (this.sceneParameters?.polygons && center) {
      this.sceneParameters.polygons.forEach(
        p => {
          SceneComponent.rotatePointOverX(a, p.center, center);
          p.points.forEach(x => SceneComponent.rotatePointOverX(a, x, center));
        }
      );
    }
  }

  rotateOverY(a: number): void {
    const center = this.sceneParameters?.center;
    if (this.sceneParameters?.polygons && center) {
      this.sceneParameters.polygons.forEach(
        p => {
          SceneComponent.rotatePointOverY(a, p.center, center);
          p.points.forEach(x => SceneComponent.rotatePointOverY(a, x, center));
        }
      );
    }
  }

  rotateOverZ(a: number): void {
    const center = this.sceneParameters?.center;
    if (this.sceneParameters?.polygons && center) {
      this.sceneParameters.polygons.forEach(
        p => {
          SceneComponent.rotatePointOverZ(a, p.center, center);
          p.points.forEach(x => SceneComponent.rotatePointOverZ(a, x, center));
        }
      );
    }
  }
}
