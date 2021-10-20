import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoBovinosComponent } from './info-bovinos.component';

describe('InfoBovinosComponent', () => {
  let component: InfoBovinosComponent;
  let fixture: ComponentFixture<InfoBovinosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoBovinosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoBovinosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
