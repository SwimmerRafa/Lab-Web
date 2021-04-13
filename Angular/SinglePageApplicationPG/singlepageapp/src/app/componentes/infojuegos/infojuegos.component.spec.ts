import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InfojuegosComponent } from './infojuegos.component';

describe('InfojuegosComponent', () => {
  let component: InfojuegosComponent;
  let fixture: ComponentFixture<InfojuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InfojuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InfojuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
