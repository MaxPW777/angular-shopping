import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppFilterBarComponent } from './app-filter-bar.component';

describe('AppFilterBarComponent', () => {
  let component: AppFilterBarComponent;
  let fixture: ComponentFixture<AppFilterBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppFilterBarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppFilterBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
