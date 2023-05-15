import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPersonalComponent } from './lista-personal.component';

describe('ListaPersonalComponent', () => {
  let component: ListaPersonalComponent;
  let fixture: ComponentFixture<ListaPersonalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaPersonalComponent]
    });
    fixture = TestBed.createComponent(ListaPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
