import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgIconsModule } from '@ng-icons/core';
import { ClipboardModule } from 'ngx-clipboard';

import { heroArrowPathRoundedSquare, heroDocumentDuplicate, heroInformationCircle } from '@ng-icons/heroicons/outline';
import { StrengthScoreBadgeComponent } from '../strength-score-badge/strength-score-badge.component';
import { PasswordInputComponent } from './password-input.component';

describe('PasswordInputComponent', () => {
  let component: PasswordInputComponent;
  let fixture: ComponentFixture<PasswordInputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PasswordInputComponent, StrengthScoreBadgeComponent],
      imports: [ClipboardModule, NgIconsModule.withIcons({ heroArrowPathRoundedSquare }),],
      schemas: [CUSTOM_ELEMENTS_SCHEMA]
    })
      .compileComponents();

    fixture = TestBed.createComponent(PasswordInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
