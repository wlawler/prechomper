import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipevaultComponent } from './recipevault.component';

describe('RecipevaultComponent', () => {
  let component: RecipevaultComponent;
  let fixture: ComponentFixture<RecipevaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecipevaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipevaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
