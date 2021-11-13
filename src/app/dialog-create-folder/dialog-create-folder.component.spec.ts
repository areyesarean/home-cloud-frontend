import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCreateFolderComponent } from './dialog-create-folder.component';

describe('DialogCreateFolderComponent', () => {
  let component: DialogCreateFolderComponent;
  let fixture: ComponentFixture<DialogCreateFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCreateFolderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCreateFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
