import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewFooterComponent } from './new-footer.component';

describe('NewFooterComponent', () => {
  let component: NewFooterComponent;
  let fixture: ComponentFixture<NewFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
