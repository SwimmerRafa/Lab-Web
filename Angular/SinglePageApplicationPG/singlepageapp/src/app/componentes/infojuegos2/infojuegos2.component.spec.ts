import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojuegos2Component } from './infojuegos2.component';

describe('Infojuegos2Component', () => {
  let component: Infojuegos2Component;
  let fixture: ComponentFixture<Infojuegos2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infojuegos2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infojuegos2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
