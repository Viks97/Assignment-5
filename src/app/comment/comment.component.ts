import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { element } from 'protractor';

@Component({
  selector: 'app-review',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
  book: Book;
  bookId:number;
  text:string;

  constructor(private svc: DataService,private route:ActivatedRoute) { }

  ngOnInit() {
    this.bookId=parseInt(this.route.snapshot.paramMap.get("id"));
    this.svc.books.forEach(element=>{
      if(element.id==this.bookId){
        this.book=element;
      }
    })

  }
  reviewBook(){
    this.book.txt.push(this.text);
    console.log(this.book.txt);
    this.reset();
  }
  reset()
  {
    this.text="";
  }

}