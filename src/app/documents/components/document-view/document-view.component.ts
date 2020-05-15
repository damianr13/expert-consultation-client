import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BaseComponent } from '@app/shared/components/base-component';
import { DocumentConsolidate, DocumentMetadata, DocumentNode } from '@app/core';


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

  ngOnInit(): void {
    this.documentMetadata = this.document.documentMetadata;
    this.documentNode = this.document.documentNode;
  }

  clickedAddComment(nodeId) {
    this.toggleCommentAdding.emit(nodeId);
  }

  triggerEditing() {
    this.editing = !this.editing;
  }

  onAddChapter(parent: DocumentNode) {
    console.log(`Adding chapter to ${parent.documentNodeType} ${parent.title}`);
  }

  onAddSection(parent: DocumentNode) {
    console.log(`Adding section to ${parent.documentNodeType} ${parent.title}`);
  }

  onAddArticle(parent: DocumentNode) {
    console.log(`Adding article to ${parent.documentNodeType} ${parent.title}`);
  }

  onAddParagraph(parent: DocumentNode) {
    console.log(`Adding paragraph to ${parent.documentNodeType} ${parent.title}`);
  }

  onAddAlignment(parent: DocumentNode) {
    console.log(`Adding alignment to ${parent.documentNodeType} ${parent.title}`);
  }

  onRemoveNode(target: DocumentNode) {
    console.log(`Removing ${target.documentNodeType} ${target.title}`);
  }
}
