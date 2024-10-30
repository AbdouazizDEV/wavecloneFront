import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoldeCompteComponent } from './solde-compte.component';

describe('SoldeCompteComponent', () => {
  let component: SoldeCompteComponent;
  let fixture: ComponentFixture<SoldeCompteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoldeCompteComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoldeCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
