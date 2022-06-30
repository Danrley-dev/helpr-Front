import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteAbertoComponent } from './cliente-aberto.component';

describe('ClienteAbertoComponent', () => {
  let component: ClienteAbertoComponent;
  let fixture: ComponentFixture<ClienteAbertoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteAbertoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteAbertoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
