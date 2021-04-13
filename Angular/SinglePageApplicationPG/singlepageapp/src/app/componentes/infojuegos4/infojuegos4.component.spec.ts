import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojuegos4Component } from './infojuegos4.component';

describe('Infojuegos4Component', () => {
  let component: Infojuegos4Component;
  let fixture: ComponentFixture<Infojuegos4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infojuegos4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infojuegos4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
