import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDetailleePaiementEnMasseComponent } from './liste-detaillee-paiement-en-masse.component';

describe('ListeDetailleePaiementEnMasseComponent', () => {
  let component: ListeDetailleePaiementEnMasseComponent;
  let fixture: ComponentFixture<ListeDetailleePaiementEnMasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeDetailleePaiementEnMasseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDetailleePaiementEnMasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
