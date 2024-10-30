import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumeDesPaiementsComponent } from './resume-des-paiements.component';

describe('ResumeDesPaiementsComponent', () => {
  let component: ResumeDesPaiementsComponent;
  let fixture: ComponentFixture<ResumeDesPaiementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumeDesPaiementsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumeDesPaiementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
