import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Juegosconsola2Component } from './juegosconsola2.component';

describe('Juegosconsola2Component', () => {
  let component: Juegosconsola2Component;
  let fixture: ComponentFixture<Juegosconsola2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Juegosconsola2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Juegosconsola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
