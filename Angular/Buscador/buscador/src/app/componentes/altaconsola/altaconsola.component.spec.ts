import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaconsolaComponent } from './altaconsola.component';

describe('AltaconsolaComponent', () => {
  let component: AltaconsolaComponent;
  let fixture: ComponentFixture<AltaconsolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AltaconsolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaconsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
