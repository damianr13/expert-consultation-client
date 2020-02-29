import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { CoreState } from '@app/core/store';
import { Observable } from 'rxjs';
import { IDocumentMetadata } from '@app/core';
import * as fromStore from '@app/core/store';

@Component({
  selector: 'app-document-overview',
  templateUrl: './document-overview.component.html',
  styleUrls: ['./document-overview.component.scss']
})
export class DocumentOverviewComponent implements OnInit {
  public documentId = this.route.snapshot.paramMap.get('documentId');
  public document$: Observable<IDocumentMetadata> = this.store.pipe(select(fromStore.getDocumentById(this.documentId)));

  constructor(private store: Store<CoreState>,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
  }

}
