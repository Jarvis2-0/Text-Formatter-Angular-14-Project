import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormattersComponent } from './formatters.component';

describe('FormattersComponent', () => {
  let component: FormattersComponent;
  let fixture: ComponentFixture<FormattersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormattersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormattersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
