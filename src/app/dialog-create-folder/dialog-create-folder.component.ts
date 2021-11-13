import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { ContentService } from '../services/content.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dialog-create-folder',
  templateUrl: './dialog-create-folder.component.html',
  styleUrls: ['./dialog-create-folder.component.css'],
})
export class DialogCreateFolderComponent implements OnInit {
  search = new FormControl('');

  foldername: string = '';

  constructor(
    private readonly _contentService: ContentService,
    private readonly _local: StorageService
  ) {}

  ngOnInit(): void {
    this.search.valueChanges.pipe(debounceTime(100)).subscribe((value) => {
      this.foldername = value;
    });
  }

  mkdir() {
    const path = this._local.getLocal();
    if (this.foldername === ''){
      this.foldername = 'Nueva_carpeta'
    }
    this._contentService.mkdir(path, this.foldername).subscribe((res) => {
      console.log(res);
    });
  }
}
