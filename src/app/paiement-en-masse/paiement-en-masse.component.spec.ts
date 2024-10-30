import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaiementEnMasseComponent } from './paiement-en-masse.component';

describe('PaiementEnMasseComponent', () => {
  let component: PaiementEnMasseComponent;
  let fixture: ComponentFixture<PaiementEnMasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaiementEnMasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaiementEnMasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
