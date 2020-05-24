import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as documentsActions from '../actions';
import { catchError, concatMap, map, switchMap, take, tap } from 'rxjs/operators';
import { DocumentNodesService, DocumentsService } from '../../services';
import { Error, IDocumentNode, IDocumentNodeCreateDto, Page } from '@app/core';
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
  loadDocumentConsolidate$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.LoadDocumentConsolidate),
      map((action: documentsActions.LoadDocumentConsolidate) => action.payload),
      concatMap((id: string) => this.documentsService.get(id)
          .pipe(
              map((document: DocumentConsolidate) => new documentsActions.LoadDocumentConsolidateSuccess(document)),
              catchError(error => of(new documentsActions.LoadDocumentConsolidateFail(error))),
          )
      )
  );

  @Effect()
  loadDocumentConsolidateByNodeId$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.LoadDocumentConsolidateByNodeId),
      map((action: documentsActions.LoadDocumentConsolidateByNodeId) => action.payload),
      concatMap((id: string) => this.documentsService.getByDocumentNodeId(id)
          .pipe(
              map((document: DocumentConsolidate) => new documentsActions.LoadDocumentConsolidateSuccess(document)),
              catchError(error => of(new documentsActions.LoadDocumentConsolidateFail(error)))
          ))
  );

  @Effect()
  saveDocument$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.SaveDocument),
      map((action: documentsActions.SaveDocument) => action.payload),
      concatMap((document: DocumentMetadata) => {
        return this.documentsService.save(document).pipe(
            map((id: string) => new documentsActions.SaveDocumentSuccess(id)),
            catchError(error => of(new documentsActions.SaveDocumentFail(this.mapError(error))))
        );
      })
  );

  @Effect({dispatch: false})
  saveDocumentSuccess$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.SaveDocumentSuccess),
      map((action: documentsActions.SaveDocumentSuccess) => action.payload),
      take(1),
      tap((id: string) => this.router.navigate(['documents', id, 'users'])),
  );

  @Effect()
  addDocumentNode$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.AddDocumentNode),
      map((action: documentsActions.AddDocumentNode) => action.payload),
      concatMap((documentNodeInsertionPackage: IDocumentNodeCreateDto) => {
        return this.documentNodesService.insertDocumentNode(documentNodeInsertionPackage).pipe(
            map((id: string) => new documentsActions.DocumentStructureUpdated(id)),
            catchError(error => of(new documentsActions.SaveDocumentFail(this.mapError(error))))
        );
      })
  );

  @Effect()
  deleteDocumentNode$ = this.actions$.pipe(
    ofType(documentsActions.DocumentsActionTypes.DeleteDocumentNode),
    map((action: documentsActions.DeleteDocumentNode) => action.payload),
    concatMap((target: IDocumentNode) => {
      return this.documentNodesService.deleteDocumentNode(target).pipe(
          map((id: string) => new documentsActions.DocumentStructureUpdated(id)),
          catchError(error => of(new documentsActions.SaveDocumentFail(this.mapError(error))))
      );
    })
  );

  @Effect()
  documentStructureUpdated$ = this.actions$.pipe(
      ofType(documentsActions.DocumentsActionTypes.DocumentStructureUpdated),
      map((action: documentsActions.DocumentStructureUpdated) => action.payload),
      map((id: string) => new documentsActions.LoadDocumentConsolidateByNodeId(id))
  );

  constructor(private store$: Store<CoreState>,
              private actions$: Actions,
              private documentsService: DocumentsService,
              private documentNodesService: DocumentNodesService,
              private router: Router) {
  }

  private mapError(payload: any): Error {
    return payload.error.i18nFieldErrors;
  }
}
