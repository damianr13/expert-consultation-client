import { Component, Input, OnInit } from '@angular/core';
import { DocumentNode, DocumentNodeType } from '@app/core';
import { DocumentBreakdownStore } from '@app/documents/containers/document-breakdown/document-breakdown.store';
import { Store } from '@ngrx/store';
import { AddDocumentNode, CoreState, DeleteDocumentNode } from '@app/core/store';

@Component({
  selector: 'app-document-node-article',
  templateUrl: './document-node-article.component.html',
  styleUrls: ['./document-node-article.component.scss']
})
export class DocumentNodeArticleComponent implements OnInit {
  @Input() article: DocumentNode;
  @Input() editing: boolean;

  public isExpanded = true;

  constructor(private documentBreakdownStore: DocumentBreakdownStore,
              private store$: Store<CoreState>) {
  }

  onAddParagraph() {
    this.store$.dispatch(new AddDocumentNode({
      parentId: this.article.id,
      documentNodeType: DocumentNodeType.PARAGRAPH
    }));
  }

  onRemoveArticle() {
    this.store$.dispatch(new DeleteDocumentNode(this.article));
  }

  ngOnInit() {
    this.isExpanded = this.documentBreakdownStore.isExpanded(this.article.id);
  }

  expandComments() {
    this.documentBreakdownStore.expand(this.article.id);
    this.isExpanded = this.documentBreakdownStore.isExpanded(this.article.id);
  }

  collapseComments() {
    this.documentBreakdownStore.collapse(this.article.id);
    this.isExpanded = this.documentBreakdownStore.isExpanded(this.article.id);
    this.scrollToArticle();
  }

  private scrollToArticle() {
    const el = document.getElementById(this.article.id);
    el.scrollIntoView({behavior: 'smooth'});
  }
}
