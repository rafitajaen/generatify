import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { LogoComponent } from './logo.component';

describe('LogoComponent', () => {
  let component: LogoComponent;
  let fixture: ComponentFixture<LogoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LogoComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(LogoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('renders logo-container component', () => {
    const logoContainer = fixture.debugElement.query(By.css('#logo-container'));
    expect(logoContainer).toBeTruthy();
  });

  it('renders logo-icon component', () => {
    const logoIcon = fixture.debugElement.query(By.css('#logo-icon'));
    expect(logoIcon).toBeTruthy();
  });

  it('renders logo-name component', () => {
    const logoName = fixture.debugElement.query(By.css('#logo-name'));
    expect(logoName).toBeTruthy();
  });
});
