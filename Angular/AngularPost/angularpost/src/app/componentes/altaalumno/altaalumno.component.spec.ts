import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaalumnoComponent } from './altaalumno.component';

describe('AltaalumnoComponent', () => {
  let component: AltaalumnoComponent;
  let fixture: ComponentFixture<AltaalumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaalumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
