import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalUsagersComponent } from './modal-usagers.component';

describe('ModalUsagersComponent', () => {
  let component: ModalUsagersComponent;
  let fixture: ComponentFixture<ModalUsagersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalUsagersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalUsagersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
