import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as documentsActions from '../actions';
import { catchError, concatMap, map, switchMap, take, tap } from 'rxjs/operators';
import { DocumentsService } from '../../services';
import { Error, Page } from '@app/core';
import { of } from 'rxjs';
import { DocumentConsolidate, DocumentMetadata } from '../../models/';
import { CoreState } from '@app/core/store';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';

@Injectable()
export class DocumentsEffect {

  @Effect()
  loadDocuments$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.LoadDocuments),
      switchMap(() => this.documentsService.list()
          .pipe(
              map((documentsPage: Page<DocumentMetadata>) => new documentsActions.LoadDocumentsSuccess(documentsPage)),
              catchError(error => of(new documentsActions.LoadDocumentsFail(error)))
          )
      ));

  @Effect()
  saveDocument$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.SaveDocument),
      map((action: documentsActions.SaveDocument) => action.payload),
      concatMap((document: DocumentMetadata) => {
        return this.documentsService.save(document).pipe(
            map((savedDocument: DocumentMetadata) => new documentsActions.SaveDocumentSuccess(savedDocument)),
            catchError(error => of(new documentsActions.SaveDocumentFail(this.mapError(error))))
        );
      })
  );

  @Effect()
  saveDocumentSuccess$ = this.actions$.pipe(
    ofType(documentsActions.DocumentsActionTypes.SaveDocumentSuccess),
    take(1),
    tap(() => this.router.navigate(['/documents'])),
  );

  constructor(private store$: Store<CoreState>,
              private actions$: Actions,
              private documentsService: DocumentsService,
              private router: Router) {
  }

  private mapError(payload: any): Error {
    return payload.error.i18nFieldErrors;
  }
}
