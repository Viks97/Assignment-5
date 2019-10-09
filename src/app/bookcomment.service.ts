import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Bookcomment {

  comment: string;

  constructor(comment) {
      
      this.comment = comment;
  }
}