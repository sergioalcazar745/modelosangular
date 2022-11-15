import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijococheComponent } from './hijocoche.component';

describe('HijococheComponent', () => {
  let component: HijococheComponent;
  let fixture: ComponentFixture<HijococheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijococheComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijococheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
