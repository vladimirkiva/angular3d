import {Polygon} from '../polygon';
import {PointImpl} from './point-impl';

export class PolygonImpl implements Polygon {

  public id?: string;
  public center: PointImpl;
  strokeWidth?: number;

  constructor(
    public fill: string,
    public points: PointImpl[],
    public stroke?: string
  ) {
    this.center = points.reduce((a, b) => a.copyAdd(b));
    this.center.divideAllBy(points.length);
  }

  public setId(id: string): PolygonImpl {
    this.id = id;
    return this;
  }

  public setStrokeWidth(strokeWidth: number): PolygonImpl {
    this.strokeWidth = strokeWidth;
    return this;
  }
}
