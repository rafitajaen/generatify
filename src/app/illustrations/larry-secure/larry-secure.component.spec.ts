import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LarrySecureComponent } from './larry-secure.component';

describe('LarrySecureComponent', () => {
  let component: LarrySecureComponent;
  let fixture: ComponentFixture<LarrySecureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LarrySecureComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LarrySecureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
