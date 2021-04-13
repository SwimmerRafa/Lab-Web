import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegobusquedaComponent } from './juegobusqueda.component';

describe('JuegobusquedaComponent', () => {
  let component: JuegobusquedaComponent;
  let fixture: ComponentFixture<JuegobusquedaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JuegobusquedaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegobusquedaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
