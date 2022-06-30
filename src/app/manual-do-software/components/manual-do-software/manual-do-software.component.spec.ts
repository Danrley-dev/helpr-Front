import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualDoSoftwareComponent } from './manual-do-software.component';

describe('ManualDoSoftwareComponent', () => {
  let component: ManualDoSoftwareComponent;
  let fixture: ComponentFixture<ManualDoSoftwareComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualDoSoftwareComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManualDoSoftwareComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
