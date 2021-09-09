import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenubotonesComponent } from './menubotones.component';

describe('MenubotonesComponent', () => {
  let component: MenubotonesComponent;
  let fixture: ComponentFixture<MenubotonesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenubotonesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenubotonesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
