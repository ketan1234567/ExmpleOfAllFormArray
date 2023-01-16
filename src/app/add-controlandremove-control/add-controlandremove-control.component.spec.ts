import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddControlandremoveControlComponent } from './add-controlandremove-control.component';

describe('AddControlandremoveControlComponent', () => {
  let component: AddControlandremoveControlComponent;
  let fixture: ComponentFixture<AddControlandremoveControlComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddControlandremoveControlComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddControlandremoveControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
