import { Component, Input } from '@angular/core';
import { DocumentNode, DocumentNodeType } from '@app/core';
import { Store } from '@ngrx/store';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';

@Component({
  selector: 'app-document-node-alignment',
  templateUrl: './document-node-alignment.component.html',
})
export class DocumentNodeAlignmentComponent {
  @Input() alignment: DocumentNode;
  @Input() editing: boolean;

  constructor(private store$: Store<CoreState>) {
  }

  onRemoveAlignment() {
    this.store$.dispatch(new DeleteDocumentNode(this.alignment));
  }
}
