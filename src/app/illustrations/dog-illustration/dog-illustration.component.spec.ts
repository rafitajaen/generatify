import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DogIllustrationComponent } from './dog-illustration.component';

describe('DogIllustrationComponent', () => {
  let component: DogIllustrationComponent;
  let fixture: ComponentFixture<DogIllustrationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DogIllustrationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DogIllustrationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
