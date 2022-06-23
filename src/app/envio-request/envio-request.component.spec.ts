import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvioRequestComponent } from './envio-request.component';

describe('EnvioRequestComponent', () => {
  let component: EnvioRequestComponent;
  let fixture: ComponentFixture<EnvioRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvioRequestComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnvioRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
