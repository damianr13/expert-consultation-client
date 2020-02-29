import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { SharedModule } from '../shared/shared.module';
import { DocumentsRoutingModule } from './documents-routing.module';
import * as fromComponents from './components';
import * as fromContainer from './containers';
import * as fromGuards from './guards';
import { CommonModule } from '@angular/common';
import { DocumentOverviewComponent } from './containers/document-overview/document-overview.component';
import { DocumentUsersAssignerComponent } from './components/document-users-assigner/document-users-assigner.component';
import { UsersModule } from '@app/users/users.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    DocumentsRoutingModule,
    UsersModule,
  ],
  declarations: [
    ...fromContainer.components,
    ...fromComponents.components,
    DocumentOverviewComponent,
    DocumentUsersAssignerComponent,
  ],
  providers: [
    ...fromGuards.guards,
  ],
})
export class DocumentsModule {
}
