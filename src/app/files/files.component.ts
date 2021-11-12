import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-files',
  templateUrl: './files.component.html',
  styleUrls: ['./files.component.css'],
})
export class FilesComponent implements OnInit {

  @Input() files: string[] = [];
  
  constructor() {}

  ngOnInit(): void {}
}
