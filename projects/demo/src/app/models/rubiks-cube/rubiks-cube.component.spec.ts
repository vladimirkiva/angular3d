import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RubiksCubeComponent } from './rubiks-cube.component';

describe('RubiksCubeComponent', () => {
  let component: RubiksCubeComponent;
  let fixture: ComponentFixture<RubiksCubeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RubiksCubeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RubiksCubeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
