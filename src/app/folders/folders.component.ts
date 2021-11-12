import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';
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

  constructor(
    private readonly _contentService: ContentService,
    private readonly _local: StorageService
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
}
