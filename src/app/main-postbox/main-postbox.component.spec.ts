import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostboxComponent } from './main-postbox.component';

describe('MainPostboxComponent', () => {
  let component: MainPostboxComponent;
  let fixture: ComponentFixture<MainPostboxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPostboxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
