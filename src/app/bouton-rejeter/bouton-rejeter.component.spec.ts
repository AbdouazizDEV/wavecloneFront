import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoutonRejeterComponent } from './bouton-rejeter.component';

describe('BoutonRejeterComponent', () => {
  let component: BoutonRejeterComponent;
  let fixture: ComponentFixture<BoutonRejeterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoutonRejeterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoutonRejeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
