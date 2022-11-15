import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HijodeporteComponent } from './hijodeporte.component';

describe('HijodeporteComponent', () => {
  let component: HijodeporteComponent;
  let fixture: ComponentFixture<HijodeporteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HijodeporteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HijodeporteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
