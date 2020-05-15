import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-document-section-editor-buttons',
  templateUrl: './document-section-editor-buttons.component.html',
  styleUrls: ['./document-section-editor-buttons.component.scss']
})
export class DocumentSectionEditorButtonsComponent implements OnInit {

  hasAddChapter: boolean;
  hasAddSection: boolean;
  hasAddArticle: boolean;
  hasAddParagraph: boolean;
  hasAddAlignment: boolean;

  hasRemoveCurrentNode: boolean;

  @Output() addChapterEventEmitter = new EventEmitter<any>();
  @Output() addSectionEventEmitter = new EventEmitter<any>();
  @Output() addArticleEventEmitter = new EventEmitter<any>();
  @Output() addParagraphEventEmitter = new EventEmitter<any>();
  @Output() addAlignmentEventEmitter = new EventEmitter<any>();

  @Output() removeCurrentNodeEventEmitter = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
    this.hasAddChapter = this.addChapterEventEmitter.observers.length > 0;
    this.hasAddSection = this.addSectionEventEmitter.observers.length > 0;
    this.hasAddArticle = this.addArticleEventEmitter.observers.length > 0;
    this.hasAddParagraph = this.addParagraphEventEmitter.observers.length > 0;
    this.hasAddAlignment = this.addAlignmentEventEmitter.observers.length > 0;

    this.hasRemoveCurrentNode = this.removeCurrentNodeEventEmitter.observers.length > 0;
  }
}
