import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RfFormsComponent } from './rf-forms.component';

describe('RfFormsComponent', () => {
  let component: RfFormsComponent;
  let fixture: ComponentFixture<RfFormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RfFormsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RfFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
