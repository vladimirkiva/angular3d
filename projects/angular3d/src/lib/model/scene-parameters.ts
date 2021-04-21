import {ViewBoxSize} from './viewBoxSize';
import {Polygon} from './polygon';
import {Point} from './point';

export interface SceneParameters {

  viewBox: ViewBoxSize;
  center: Point;
  polygons: Polygon[];
}
