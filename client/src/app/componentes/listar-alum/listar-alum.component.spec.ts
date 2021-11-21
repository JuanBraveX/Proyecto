import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarAlumComponent } from './listar-alum.component';

describe('ListarAlumComponent', () => {
  let component: ListarAlumComponent;
  let fixture: ComponentFixture<ListarAlumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListarAlumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListarAlumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
