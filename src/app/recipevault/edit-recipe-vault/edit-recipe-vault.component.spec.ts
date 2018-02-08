import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditRecipeVaultComponent } from './edit-recipe-vault.component';

describe('EditRecipeVaultComponent', () => {
  let component: EditRecipeVaultComponent;
  let fixture: ComponentFixture<EditRecipeVaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditRecipeVaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditRecipeVaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
