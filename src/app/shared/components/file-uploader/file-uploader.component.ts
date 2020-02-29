import { Component, EventEmitter, Input, Output } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as fromStore from '@app/core/store';
import { Router } from '@angular/router';
import { Page, User } from '@app/core';

@Component({
  selector: 'app-file-uploader',
  templateUrl: './file-uploader.component.html',
  styleUrls: ['./file-uploader.component.scss']
})
export class FileUploaderComponent {
  @Input() public url = '';
  @Output() uploadFinished: EventEmitter<any> = new EventEmitter();

  completed$: Observable<boolean> = this.store$.pipe(select(fromStore.selectUploadFileCompleted));
  progress$: Observable<number> = this.store$.pipe(select(fromStore.selectUploadFileProgress));
  error$: Observable<string> = this.store$.pipe(select(fromStore.selectUploadFileError));
  isInProgress$: Observable<boolean> = this.store$.pipe(select(fromStore.selectUploadFileInProgress));
  isReady$: Observable<boolean> = this.store$.pipe(select(fromStore.selectUploadFileReady));
  hasFailed$: Observable<boolean> = this.store$.pipe(select(fromStore.selectUploadFileFailed));

  private isUploadStarted = false;

  constructor(private store$: Store<fromStore.State>) {
    this.store$.pipe(select(fromStore.selectResult)).subscribe(result => {
      if (!this.isUploadStarted) {
        return ;
      }
      this.isUploadStarted = false;
      this.uploadFinished.emit(result);
    });
  }

  uploadFile(event: any) {
    const files: FileList = event.target.files;
    const file = files.item(0);
    const url = this.url;
    this.store$.dispatch(
      new fromStore.UploadRequestAction({
        file, url
      })
    );
    this.isUploadStarted = true;

    // clear the input form
    event.srcElement.value = null;
  }

  resetUpload() {
    this.store$.dispatch(new fromStore.UploadResetAction());
  }

  cancelUpload() {
    this.store$.dispatch(new fromStore.UploadCancelAction());
  }

}
