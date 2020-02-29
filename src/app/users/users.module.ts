import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import * as fromContainers from './containers';
import * as fromComponents from './components';
import * as fromGuards from './guards';
import { UsersTableComponent } from '@app/users/components/users-table/users-table.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    UsersRoutingModule,
  ],
  declarations: [
    ...fromContainers.components,
    ...fromComponents.components,
  ],
  providers: [
    ...fromGuards.guards,
  ],
  exports: [
    UsersTableComponent,
  ],
})
export class UsersModule {}
