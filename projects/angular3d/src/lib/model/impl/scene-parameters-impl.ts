import {SceneParameters} from '../scene-parameters';
import {Point} from '../point';
import {Polygon} from '../polygon';
import {ViewBoxSize} from '../viewBoxSize';

export class SceneParametersImpl implements SceneParameters {

  constructor(
    public center: Point,
    public polygons: Polygon[],
    public viewBox: ViewBoxSize
  ) {}
}
