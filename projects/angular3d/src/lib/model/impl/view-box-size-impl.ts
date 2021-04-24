import {ViewBoxSize} from '../viewBoxSize';

export class ViewBoxSizeImpl implements ViewBoxSize {

  constructor(
    public minX: number,
    public minY: number,
    public width: number,
    public height: number
  ) {}
}
