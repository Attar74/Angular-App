import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VieweshomeComponent } from './vieweshome.component';

describe('VieweshomeComponent', () => {
  let component: VieweshomeComponent;
  let fixture: ComponentFixture<VieweshomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VieweshomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VieweshomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
