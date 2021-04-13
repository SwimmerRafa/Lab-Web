import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infojuegos3Component } from './infojuegos3.component';

describe('Infojuegos3Component', () => {
  let component: Infojuegos3Component;
  let fixture: ComponentFixture<Infojuegos3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infojuegos3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infojuegos3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
