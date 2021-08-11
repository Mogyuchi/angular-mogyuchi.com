import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomfactsComponent } from './randomfacts.component';

describe('RandomfactsComponent', () => {
  let component: RandomfactsComponent;
  let fixture: ComponentFixture<RandomfactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomfactsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomfactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
