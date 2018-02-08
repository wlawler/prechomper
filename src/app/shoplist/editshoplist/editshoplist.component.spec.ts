import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditshoplistComponent } from './editshoplist.component';

describe('EditshoplistComponent', () => {
  let component: EditshoplistComponent;
  let fixture: ComponentFixture<EditshoplistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditshoplistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditshoplistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
