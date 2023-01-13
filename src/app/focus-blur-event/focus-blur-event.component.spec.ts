import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FocusBlurEventComponent } from './focus-blur-event.component';

describe('FocusBlurEventComponent', () => {
  let component: FocusBlurEventComponent;
  let fixture: ComponentFixture<FocusBlurEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FocusBlurEventComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FocusBlurEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
