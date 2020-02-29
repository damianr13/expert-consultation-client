import { Component } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { CoreState } from '../../../core/store';
import * as fromStore from '@app/core/store';
import { User } from '@app/core';

@Component({
  selector: 'app-import-csv',
  templateUrl: './import-csv.component.html',
  styleUrls: ['./import-csv.component.scss']
})
export class ImportCsvComponent {
  private importedUsers$ = this.store.pipe(select(fromStore.getImportUsers));

  constructor(private store: Store<CoreState>) {
  }

  onCsvUploaded(result: any) {
    const users: User[] = result;
    this.store.dispatch(new fromStore.ImportFromCsvSuccess(users));
    this.store.dispatch(new fromStore.LoadUsers());
    this.store.dispatch(new fromStore.UploadResetAction());
  }
}
