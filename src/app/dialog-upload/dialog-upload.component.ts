import { HttpClient, HttpEventType } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';
import { ContentService } from '../services/content.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dialog-upload',
  templateUrl: './dialog-upload.component.html',
  styleUrls: ['./dialog-upload.component.css'],
})
export class DialogUploadComponent implements OnInit {
  files: any[] = [];
  uploading: boolean = false;
  color: ThemePalette = 'accent';
  mode: ProgressSpinnerMode = 'determinate';
  value = 0;

  constructor(
    private readonly _contentService: ContentService,
    private readonly _local: StorageService
  ) {}

  ngOnInit(): void {}

  get getFile() {
    return [...this.files];
  }

  setFile(event: any) {
    const file = event.target.files[0];
    this.files.push(file);
  }

  uploadFiles() {
    this.uploading = true;
    this.value = 0;
    const path = this._local.getLocal();
    try {
      const form = new FormData();
      this.files.forEach((file) => {
        form.append('files', file);
      });
      this._contentService.uploadFiles(path, form).subscribe((event) => {
        if (event.type === HttpEventType.UploadProgress) {
          // This is an upload progress event. Compute and show the % done:
          this.value = Math.round((100 * event.loaded) / event.total);
          this.uploading = false;
        }
        console.log(event);
        this.value = 100;
      });
    } catch (error) {
      this.value = 0;
      console.log('ERROR' + error);
    }
  }
}
