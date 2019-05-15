import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllcomponentsComponent } from './allcomponents.component';

describe('AllcomponentsComponent', () => {
  let component: AllcomponentsComponent;
  let fixture: ComponentFixture<AllcomponentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllcomponentsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
