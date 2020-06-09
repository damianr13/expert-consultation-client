import { Component, Input } from '@angular/core';
import { DocumentNode, DocumentNodeType } from '@app/core';
import { Store } from '@ngrx/store';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';

@Component({
  selector: 'app-document-node-section',
  templateUrl: './document-node-section.component.html',
})
export class DocumentNodeSectionComponent {
  @Input() section: DocumentNode;
  @Input() editing: boolean;

  constructor(private store$: Store<CoreState>) {
  }

  onAddArticle() {
    this.store$.dispatch(new AddDocumentNode({
      parentId: this.section.id,
      documentNodeType: DocumentNodeType.ARTICLE
    }));
  }

  onRemoveSection() {
    this.store$.dispatch(new DeleteDocumentNode(this.section));
  }
}
