import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarryVulnerableComponent } from './larry-vulnerable.component';

describe('LarryVulnerableComponent', () => {
  let component: LarryVulnerableComponent;
  let fixture: ComponentFixture<LarryVulnerableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarryVulnerableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarryVulnerableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
