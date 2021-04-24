import {Point} from '../point';

export class PointImpl implements Point {

  constructor(
    public x: number,
    public y: number,
    public z: number
  ) {}

  copy(): PointImpl {
    return new PointImpl(this.x, this.y, this.z);
  }

  copyAddX(toAdd: number): PointImpl {
    return new PointImpl(this.x + toAdd, this.y, this.z);
  }

  copyAddY(toAdd: number): PointImpl {
    return new PointImpl(this.x, this.y + toAdd, this.z);
  }

  copyAddZ(toAdd: number): PointImpl {
    return new PointImpl(this.x, this.y, this.z + toAdd);
  }

  copyAdd(p: Point): PointImpl {
    return new PointImpl(this.x + p.x, this.y + p.y, this.z + p.z);
  }

  divideAllBy(d: number): void {
    this.x = this.x / d;
    this.y = this.y / d;
    this.z = this.z / d;
  }
}
