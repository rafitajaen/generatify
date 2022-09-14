import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarryGoodComponent } from './larry-good.component';

describe('LarryGoodComponent', () => {
  let component: LarryGoodComponent;
  let fixture: ComponentFixture<LarryGoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarryGoodComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarryGoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
