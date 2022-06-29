import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPostareaComponent } from './main-postarea.component';

describe('MainPostareaComponent', () => {
  let component: MainPostareaComponent;
  let fixture: ComponentFixture<MainPostareaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPostareaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPostareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
