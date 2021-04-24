import {Point} from './point';

export interface Polygon {
  /**
   * Polygon id might be useful for scene debugging
   */
  id?: string;

  points: Point[];

  center: Point;

  /**
   * Fill color
   */
  fill?: string;

  /**
   * Stroke color
   */
  stroke?: string;

  strokeWidth?: number;
}
