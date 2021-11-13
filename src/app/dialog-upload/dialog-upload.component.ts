import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ContentService } from '../services/content.service';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-dialog-upload',
  templateUrl: './dialog-upload.component.html',
  styleUrls: ['./dialog-upload.component.css']
})
export class DialogUploadComponent implements OnInit {
  files: any[] = [];

  constructor(private readonly _contentService: ContentService, private readonly _local: StorageService) { }

  ngOnInit(): void {
  }

  get getFile() {
    return [...this.files];
  }

  setFile(event: any) {
    const file = event.target.files[0];
    console.log(file);
    this.files.push(file);
    console.log(this.files);
  }

  uploadFiles() {
    const path = this._local.getLocal();
    try {
      const form = new FormData();
      this.files.forEach((file) => {
        form.append('files', file);
      })
      this._contentService.uploadFiles(path, form).subscribe((res) => {
        console.log(res);
      });
    } catch (error) {
      console.log('ERROR' + error);
    }
  }

  

}
