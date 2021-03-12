import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EelementsHomeComponent } from './elements-home.component';

describe('EelementsHomeComponent', () => {
  let component: EelementsHomeComponent;
  let fixture: ComponentFixture<EelementsHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EelementsHomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EelementsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
