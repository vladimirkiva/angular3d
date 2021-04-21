import {Point} from './point';

export interface Polygon {
  points: Point[];
  center: Point;
  fill?: string;
  stroke?: string;
}
