import { Injectable } from '@angular/core';
import { DocumentNodesApiService } from '../http';
import { IDocumentNode, IDocumentNodeCreateDto } from '../models';
import { Observable } from 'rxjs';

@Injectable()
export class DocumentNodesService {

  constructor(private documentNodesApiService: DocumentNodesApiService) {
  }

  public insertDocumentNode(documentNodeInsertionPackage: IDocumentNodeCreateDto): Observable<string> {
    return this.documentNodesApiService.insertDocumentNode(documentNodeInsertionPackage);
  }

  public deleteDocumentNode(target: IDocumentNode): Observable<string> {
    return this.documentNodesApiService.deleteDocumentNode(target);
  }
}
