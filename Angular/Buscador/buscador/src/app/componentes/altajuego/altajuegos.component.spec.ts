import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltajuegosComponent } from './altajuegos.component';

describe('AltajuegosComponent', () => {
  let component: AltajuegosComponent;
  let fixture: ComponentFixture<AltajuegosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltajuegosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltajuegosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
