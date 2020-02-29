import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromContainers from './containers';
import { DocumentsGuard } from '@app/documents/guards';

const routes: Routes = [
  {
    path: '',
    component: fromContainers.DocumentsComponent,
    canActivate: [
      DocumentsGuard,
    ],
  },
  {
    path: ':documentId/breakdown',
    component: fromContainers.DocumentBreakdownComponent,
  },
  {
    path: 'add',
    component: fromContainers.AddDocumentComponent,
  },
  {
    path: ':documentId',
    component: fromContainers.DocumentOverviewComponent,
    canActivate: [
        DocumentsGuard,
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class DocumentsRoutingModule {
}
