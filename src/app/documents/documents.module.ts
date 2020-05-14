import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { DocumentsRoutingModule } from './documents-routing.module';
import * as fromComponents from './components';
import * as fromContainer from './containers';
import * as fromGuards from './guards';
import { CommonModule } from '@angular/common';
import { DocumentViewerEditorComponent } from './components/document-viewer-editor/document-viewer-editor.component';
import { CommentsModule } from '@app/comments/comments.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule,
    CommentsModule
  ],
  declarations: [
    ...fromContainer.components,
    ...fromComponents.components,
    DocumentViewerEditorComponent,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class DocumentsModule {
}
