import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentViewerEditorComponent } from './document-viewer-editor.component';

describe('DocumentViewerEditorComponent', () => {
  let component: DocumentViewerEditorComponent;
  let fixture: ComponentFixture<DocumentViewerEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DocumentViewerEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DocumentViewerEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
