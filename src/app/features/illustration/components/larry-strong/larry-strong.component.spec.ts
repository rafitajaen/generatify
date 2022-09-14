import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarryStrongComponent } from './larry-strong.component';

describe('LarryStrongComponent', () => {
  let component: LarryStrongComponent;
  let fixture: ComponentFixture<LarryStrongComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarryStrongComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarryStrongComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
