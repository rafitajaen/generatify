import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StrengthScoreBadgeComponent } from './strength-score-badge.component';

describe('StrengthScoreBadgeComponent', () => {
  let component: StrengthScoreBadgeComponent;
  let fixture: ComponentFixture<StrengthScoreBadgeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StrengthScoreBadgeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StrengthScoreBadgeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
