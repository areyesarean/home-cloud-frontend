import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  constructor() {}

  setLocal(folderName: string) {
    if (!localStorage.getItem('path')) {
      let path: string[] = [];
      path.push(folderName.trim().toString());
      localStorage.setItem('path', JSON.stringify(path));
    } else {
      let pathn: string[] = JSON.parse(localStorage.getItem('path')!);
      localStorage.removeItem('path');
      pathn.push(folderName.toString());
      localStorage.setItem('path', JSON.stringify(pathn));
    }
  }

  getLocal() {
    if (localStorage.getItem('path')) {
      let path: string[] = JSON.parse(localStorage.getItem('path')!);
      let res = path.join('-');
      return res;
    }
    return '';
  }

  back() {
    /*
      Elimina el ultimo elemento del array y vuelve a guadrar el array
      resultante en el local storage y retorna el path resultante en string
    */
    let path: string[] = JSON.parse(localStorage.getItem('path')!);
    path.pop();
    JSON.stringify(path);
    localStorage.removeItem('path');
    localStorage.setItem('path', JSON.stringify(path));
    return path;
  }
}
