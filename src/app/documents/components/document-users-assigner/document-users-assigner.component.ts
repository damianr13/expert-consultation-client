import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Filter, PageData, User } from '@app/core';
import { select, Store } from '@ngrx/store';
import * as fromStore from '@app/core/store';
import { CoreState } from '@app/core/store';

@Component({
  selector: 'app-document-users-assigner',
  templateUrl: './document-users-assigner.component.html',
  styleUrls: ['./document-users-assigner.component.scss']
})
export class DocumentUsersAssignerComponent implements OnInit {

  public users$: Observable<User[]> = this.store.pipe(select(fromStore.getUsers));
  public usersPageData$: Observable<PageData> = this.store.pipe(select(fromStore.getUsersPageData));
  private usersLoaded$: Observable<boolean> = this.store.pipe(select(fromStore.getUsersLoaded));
  private filter$: Observable<Filter> = this.store.pipe(select(fromStore.getUsersFilter));

  constructor(private store: Store<CoreState>) { }

  ngOnInit() {
  }

  onFilterChange(filter: Filter) {
    this.store.dispatch(new fromStore.LoadUsers(filter));
  }
}
