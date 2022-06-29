import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoMainBodyComponent } from './no-main-body.component';

describe('NoMainBodyComponent', () => {
  let component: NoMainBodyComponent;
  let fixture: ComponentFixture<NoMainBodyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoMainBodyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoMainBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
