import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@app/shared/components/base-component';
import { DocumentConsolidate, DocumentMetadata, DocumentNode, DocumentNodeType } from '@app/core';
import { Store } from '@ngrx/store';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';


@Component({
  selector: 'app-document-view',
  templateUrl: './document-view.component.html',
  styleUrls: ['./document-view.component.scss']
})
export class DocumentViewComponent extends BaseComponent implements OnInit {
  @Input() document: DocumentConsolidate;
  @Input() addCommentModeForNode: Map<string, boolean>;
  @Output() toggleCommentAdding: EventEmitter<string> = new EventEmitter<string>();
  documentNode: DocumentNode;
  documentMetadata: DocumentMetadata;
  editing = false;

  constructor(private store$: Store<CoreState>) {
    super();
  }

  get documentNode(): DocumentNode {
    return this.document.documentNode;
  }

  get documentMetadata(): DocumentMetadata {
    return this.document.documentMetadata;
  }

  ngOnInit(): void {
  }

  clickedAddComment(nodeId) {
    this.toggleCommentAdding.emit(nodeId);
  }

  triggerEditing() {
    this.editing = !this.editing;
  }

  onAddChapter(parent: DocumentNode) {
    this.onAddDocumentNodeNode(parent, DocumentNodeType.CHAPTER);
  }

  onAddSection(parent: DocumentNode) {
    this.onAddDocumentNodeNode(parent, DocumentNodeType.SECTION);
  }

  onAddArticle(parent: DocumentNode) {
    this.onAddDocumentNodeNode(parent, DocumentNodeType.ARTICLE);
  }

  onAddParagraph(parent: DocumentNode) {
    this.onAddDocumentNodeNode(parent, DocumentNodeType.PARAGRAPH);
  }

  onAddAlignment(parent: DocumentNode) {
    this.onAddDocumentNodeNode(parent, DocumentNodeType.ALIGNMENT);
  }

  onRemoveNode(target: DocumentNode) {
    this.store$.dispatch(new DeleteDocumentNode(target));
  }

  onAddDocumentNodeNode(parent: DocumentNode, type: DocumentNodeType) {
    this.store$.dispatch(new AddDocumentNode({
      parentId: parent.id,
      documentNodeType: type
    }));
  }
}
