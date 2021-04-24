import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SceneComponent } from './scene.component';
import {PointImpl} from '../model/impl/point-impl';

const accuracy = 0.01;

describe('SceneComponent', () => {
  // let component: SceneComponent;
  // let fixture: ComponentFixture<SceneComponent>;
  //
  // beforeEach(async () => {
  //   await TestBed.configureTestingModule({
  //     declarations: [ SceneComponent ]
  //   })
  //   .compileComponents();
  // });
  //
  // beforeEach(() => {
  //   fixture = TestBed.createComponent(SceneComponent);
  //   component = fixture.componentInstance;
  //   fixture.detectChanges();
  // });
  //
  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });

  it(('should rotate center point over Y'), () => {
    const p = new PointImpl(10, 5, 5);
    const c = new PointImpl(5, 5, 5);
    const expected = new PointImpl(5, 5, 10);
    SceneComponent.rotatePointOverY(Math.PI / 2, p, c);
    expect(Math.abs(expected.x - p.x)).toBeLessThan(accuracy);
    expect(Math.abs(expected.y - p.y)).toBeLessThan(accuracy);
    expect(Math.abs(expected.z - p.z)).toBeLessThan(accuracy);
  });

  it(('should rotate corner 110 point over Y pi/2'), () => {
    const p = new PointImpl(10, 10, 0);
    const c = new PointImpl(5, 5, 5);
    const expected = new PointImpl(10, 10, 10);
    SceneComponent.rotatePointOverY(Math.PI / 2, p, c);
    expect(Math.abs(expected.x - p.x)).toBeLessThan(accuracy);
    expect(Math.abs(expected.y - p.y)).toBeLessThan(accuracy);
    expect(Math.abs(expected.z - p.z)).toBeLessThan(accuracy);
  });

  it(('should rotate corner 110 point over Y pi/4'), () => {
    const p = new PointImpl(10, 10, 0);
    const c = new PointImpl(5, 5, 5);
    const expected = new PointImpl(12.071062767342184, 10, 5.008446319142134);
    SceneComponent.rotatePointOverY(Math.PI / 4, p, c);
    expect(Math.abs(expected.x - p.x)).toBeLessThan(accuracy);
    expect(Math.abs(expected.y - p.y)).toBeLessThan(accuracy);
    expect(Math.abs(expected.z - p.z)).toBeLessThan(accuracy);
  });
});
