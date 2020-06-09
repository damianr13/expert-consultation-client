import { Component, Input } from '@angular/core';
import { DocumentNode, DocumentNodeType } from '@app/core';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-document-node-chapter',
  templateUrl: './document-node-chapter.component.html',
})
export class DocumentNodeChapterComponent {
  @Input() chapter: DocumentNode;
  @Input() editing: boolean;

  constructor(private store$: Store<CoreState>) {
  }

  onAddSection() {
    this.store$.dispatch(new AddDocumentNode({
      parentId: this.chapter.id,
      documentNodeType: DocumentNodeType.SECTION
    }));
  }

  onAddArticle() {
    this.store$.dispatch(new AddDocumentNode({
      parentId: this.chapter.id,
      documentNodeType: DocumentNodeType.ARTICLE
    }));
  }

  onRemoveChapter() {
    this.store$.dispatch(new DeleteDocumentNode(this.chapter));
  }
}
