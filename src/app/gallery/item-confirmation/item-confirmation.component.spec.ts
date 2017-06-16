import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemConfirmationComponent } from './item-confirmation.component';

describe('ItemConfirmationComponent', () => {
  let component: ItemConfirmationComponent;
  let fixture: ComponentFixture<ItemConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
