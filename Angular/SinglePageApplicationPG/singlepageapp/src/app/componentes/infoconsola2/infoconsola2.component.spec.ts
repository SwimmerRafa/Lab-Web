import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Infoconsola2Component } from './infoconsola2.component';

describe('Infoconsola2Component', () => {
  let component: Infoconsola2Component;
  let fixture: ComponentFixture<Infoconsola2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Infoconsola2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Infoconsola2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
