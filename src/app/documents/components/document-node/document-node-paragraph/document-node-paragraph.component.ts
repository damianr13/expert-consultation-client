import { Component, Input } from '@angular/core';
import { DocumentNode, DocumentNodeType } from '@app/core';
import { Store } from '@ngrx/store';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';

@Component({
  selector: 'app-document-node-paragraph',
  templateUrl: './document-node-paragraph.component.html',
})
export class DocumentNodeParagraphComponent {
  @Input() paragraph: DocumentNode;
  @Input() editing: boolean;

  constructor(private store$: Store<CoreState>) {
  }

  onAddAlignment() {
    this.store$.dispatch(new AddDocumentNode({
      parentId: this.paragraph.id,
      documentNodeType: DocumentNodeType.ALIGNMENT
    }));
  }

  onRemoveParagraph() {
    this.store$.dispatch(new DeleteDocumentNode(this.paragraph));
  }
}
