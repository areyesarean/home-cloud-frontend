import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  folders: string[] = [];
  files: string[] = [];
  path: string = '';
  route: string = '';

  constructor(
    private _contentService: ContentService,
    private _localStorage: StorageService
  ) {
    this.showData('');
    localStorage.clear();
  }

  ngOnInit(): void {}

  showData(route: string) {
    this._contentService.content(route).subscribe(
      (data) => {
        this.folders = data.content.directories;
        this.files = data.content.files;
        this.path = data.path;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
