import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { HeroComponent } from './hero.component';
import { HeroModule } from './hero.module';

describe('HeroComponent', () => {
  let component: HeroComponent,
    fixture: ComponentFixture<HeroComponent>;

  beforeEach(waitForAsync(() => {

    TestBed.configureTestingModule({
      imports: [HeroModule]
    })
      .compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(HeroComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();
      });

  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
