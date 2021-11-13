import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
import { DialogCreateFolderComponent } from '../dialog-create-folder/dialog-create-folder.component';
import { DialogUploadComponent } from '../dialog-upload/dialog-upload.component';
import { ContentService } from '../services/content.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-folders',
  templateUrl: './folders.component.html',
  styleUrls: ['./folders.component.css'],
})
export class FoldersComponent implements OnInit {
  @Input() folders: string[] = [];
  path: string = '';

  @Output() onPath: EventEmitter<string> = new EventEmitter();
  @Output() onBack: EventEmitter<string> = new EventEmitter();
  @Output() onRefresh: EventEmitter<string> = new EventEmitter();

  constructor(
    private readonly _contentService: ContentService,
    private readonly _local: StorageService,
    public _dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  url(forlderName: string) {
    this._local.setLocal(forlderName);
    this.onPath.emit(this._local.getLocal());
  }
  back() {
    this._local.back();
    this.onPath.emit(this._local.getLocal());
  }

  uploadFile() {
    let dialogRef = this._dialog.open(DialogUploadComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.onRefresh.emit(this._local.getLocal());
    });
  }

  mkdir() {
    let dialogRef = this._dialog.open(DialogCreateFolderComponent, {
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((param) => {
      console.log(param);
      this.onRefresh.emit(this._local.getLocal());
    })
  }
}
