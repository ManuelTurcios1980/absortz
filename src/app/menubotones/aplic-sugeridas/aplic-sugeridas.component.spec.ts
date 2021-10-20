import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AplicSugeridasComponent } from './aplic-sugeridas.component';

describe('AplicSugeridasComponent', () => {
  let component: AplicSugeridasComponent;
  let fixture: ComponentFixture<AplicSugeridasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AplicSugeridasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AplicSugeridasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
