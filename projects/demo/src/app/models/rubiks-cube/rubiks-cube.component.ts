import { Component, OnInit } from '@angular/core';
import {SceneParameters} from '../../../../../angular3d/src/lib/model/scene-parameters';
import {SceneParametersImpl} from '../../../../../angular3d/src/lib/model/impl/scene-parameters-impl';
import {PointImpl} from '../../../../../angular3d/src/lib/model/impl/point-impl';
import {Polygon} from '../../../../../angular3d/src/lib/model/polygon';
import {ViewBoxSizeImpl} from '../../../../../angular3d/src/lib/model/impl/view-box-size-impl';
import {PolygonImpl} from '../../../../../angular3d/src/lib/model/impl/polygon-impl';

@Component({
  selector: 'app-rubiks-cube',
  templateUrl: './rubiks-cube.component.html',
  styleUrls: ['./rubiks-cube.component.scss']
})
export class RubiksCubeComponent implements OnInit {

  constructor() {
    this.scene = RubiksCubeComponent.getRubiksCube();
  }

  static readonly blocksNumberPerDimension = 5;
  static readonly blockSideSize = 10;
  static readonly distanceBetweenBlocks = 2;
  static readonly blockSpace = RubiksCubeComponent.blockSideSize + RubiksCubeComponent.distanceBetweenBlocks;

  static readonly xFrontColor = '#cccccc';
  static readonly yFrontColor = '#00ff00';
  static readonly zFrontColor = '#ffff00';
  static readonly xBackColor = '#ff0000';
  static readonly yBackColor = '#0000ff';
  static readonly zBackColor = '#ff7777';

  private scene: SceneParameters;

  public static getRubiksCube(): SceneParameters {
    const size = this.blockSpace * this.blocksNumberPerDimension - this.distanceBetweenBlocks;
    return new SceneParametersImpl(
      new PointImpl(size / 2, size / 2, size / 2),
      RubiksCubeComponent.getPolygons(),
      new ViewBoxSizeImpl(-size / 2, -size / 2, size * 2, size * 2)
    );
  }

  private static getCube(xi: number, yi: number, zi: number): Polygon[] {
    const vertex000 = new PointImpl(
      RubiksCubeComponent.blockSpace * xi, RubiksCubeComponent.blockSpace * yi , RubiksCubeComponent.blockSpace * zi);
    const vertex001 = vertex000.copyAddZ(RubiksCubeComponent.blockSideSize);
    const vertex010 = vertex000.copyAddY(RubiksCubeComponent.blockSideSize);
    const vertex011 = vertex010.copyAddZ(RubiksCubeComponent.blockSideSize);
    const vertex100 = vertex000.copyAddX(RubiksCubeComponent.blockSideSize);
    const vertex101 = vertex100.copyAddZ(RubiksCubeComponent.blockSideSize);
    const vertex110 = vertex100.copyAddY(RubiksCubeComponent.blockSideSize);
    const vertex111 = vertex110.copyAddZ(RubiksCubeComponent.blockSideSize);

    return [
      new PolygonImpl(RubiksCubeComponent.xFrontColor,
        [vertex110.copy(), vertex100.copy(), vertex101.copy(), vertex111.copy()], '#000000').setId('frontX'),
      new PolygonImpl(RubiksCubeComponent.xBackColor,
        [vertex010.copy(), vertex000.copy(), vertex001.copy(), vertex011.copy()], '#000000').setId('backX'),

      new PolygonImpl(RubiksCubeComponent.yFrontColor,
        [vertex010.copy(), vertex110.copy(), vertex111.copy(), vertex011.copy()], '#000000').setId('frontY'),
      new PolygonImpl(RubiksCubeComponent.yBackColor,
        [vertex000.copy(), vertex100.copy(), vertex101.copy(), vertex001.copy()], '#000000').setId('backY'),

      new PolygonImpl(RubiksCubeComponent.zFrontColor,
        [vertex001.copy(), vertex101.copy(), vertex111.copy(), vertex011.copy()], '#000000').setId('frontZ'),
      new PolygonImpl(RubiksCubeComponent.zBackColor,
        [vertex000.copy(), vertex100.copy(), vertex110.copy(), vertex010.copy()], '#000000').setId('backZ')
    ];
  }

  private static getPolygons(): Polygon[] {
    let result: Polygon[] = [];
    for (let xi = 0; xi < RubiksCubeComponent.blocksNumberPerDimension; xi++) {
      for (let yi = 0; yi < RubiksCubeComponent.blocksNumberPerDimension; yi++) {
        for (let zi = 0; zi < RubiksCubeComponent.blocksNumberPerDimension; zi++) {
          const cube = RubiksCubeComponent.getCube(xi, yi, zi);
          result = result.concat(cube);
        }
      }
    }
    return result;
  }

  ngOnInit(): void {
  }
}
