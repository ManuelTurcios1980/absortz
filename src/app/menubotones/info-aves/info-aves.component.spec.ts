import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoAvesComponent } from './info-aves.component';

describe('InfoAvesComponent', () => {
  let component: InfoAvesComponent;
  let fixture: ComponentFixture<InfoAvesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoAvesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoAvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
