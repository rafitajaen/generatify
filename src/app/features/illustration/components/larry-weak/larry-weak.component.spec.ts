import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarryWeakComponent } from './larry-weak.component';

describe('LarryWeakComponent', () => {
  let component: LarryWeakComponent;
  let fixture: ComponentFixture<LarryWeakComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarryWeakComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarryWeakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
