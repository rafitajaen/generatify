import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { IllustrationComponent } from './illustration.component';
import { IllustrationModule } from './illustration.module';

describe("IllustrationComponent", () => {
  let component: IllustrationComponent,
    fixture: ComponentFixture<IllustrationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [IllustrationModule]
    }).compileComponents()
      .then(() => {

        fixture = TestBed.createComponent(IllustrationComponent);
        component = fixture.componentInstance;

        fixture.detectChanges();

      })
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  })
});
