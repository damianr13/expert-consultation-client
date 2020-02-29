import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentUsersAssignerComponent } from './document-users-assigner.component';

describe('DocumentUsersAssignerComponent', () => {
  let component: DocumentUsersAssignerComponent;
  let fixture: ComponentFixture<DocumentUsersAssignerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentUsersAssignerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentUsersAssignerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
