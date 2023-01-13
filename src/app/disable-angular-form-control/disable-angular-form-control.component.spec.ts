import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisableAngularFormControlComponent } from './disable-angular-form-control.component';

describe('DisableAngularFormControlComponent', () => {
  let component: DisableAngularFormControlComponent;
  let fixture: ComponentFixture<DisableAngularFormControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisableAngularFormControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisableAngularFormControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
