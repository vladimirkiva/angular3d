import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular3dComponent } from './angular3d.component';

describe('Angular3dComponent', () => {
  let component: Angular3dComponent;
  let fixture: ComponentFixture<Angular3dComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Angular3dComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular3dComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
