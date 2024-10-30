import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonConfirmerComponent } from './bouton-confirmer.component';

describe('BoutonConfirmerComponent', () => {
  let component: BoutonConfirmerComponent;
  let fixture: ComponentFixture<BoutonConfirmerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonConfirmerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonConfirmerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
