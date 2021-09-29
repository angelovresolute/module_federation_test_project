import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedLibService {
  public someData: string;
  constructor() { }
}
