import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentSectionEditorButtonsComponent } from './document-section-editor-buttons.component';

describe('DocumentSectionEditorButtonsComponent', () => {
  let component: DocumentSectionEditorButtonsComponent;
  let fixture: ComponentFixture<DocumentSectionEditorButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentSectionEditorButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentSectionEditorButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
