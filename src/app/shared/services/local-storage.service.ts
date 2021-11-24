import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  set(key: string, data: any): void {
    try {
      localStorage.setItem(key, JSON.stringify(data));
    } catch (e) {
      console.log(e);
    }
  }

  get(key: string): any {
    try {
      return JSON.parse(localStorage.getItem(key) || '');
    } catch (e) {
      console.log(e);
    }
  }

  remove(key: string): void {
    try {
      localStorage.removeItem(key);
    } catch (e) {
      console.error(`Error removing localStorage key ${key}`, e);
    }
  }

  clear(): void {
    try {
      localStorage.clear();
    } catch (e) {
      console.error(`Error clearing localStorage`, e);
    }
  }
}
