import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PadrecochesComponent } from './padrecoches.component';

describe('PadrecochesComponent', () => {
  let component: PadrecochesComponent;
  let fixture: ComponentFixture<PadrecochesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PadrecochesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PadrecochesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
