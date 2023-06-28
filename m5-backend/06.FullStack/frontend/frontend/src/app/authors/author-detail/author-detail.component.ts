import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from 'src/app/books/services/book.service';
import { AuthorService } from '../services/author.service';
import { IBook } from 'src/app/books/models/book.model';
import { IAuthor } from '../models/author.model';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrls: ['./author-detail.component.css']
})
export class AuthorDetailComponent implements OnInit{

  books: IBook[] = [];
  author: IAuthor | undefined;

  constructor(private authorService: AuthorService,
              private bookService: BookService,
              private activatedRoute: ActivatedRoute){}

  ngOnInit(): void {
    //Books: findAllAuthorId

    this.activatedRoute.params.subscribe((params) => {
      const id = parseInt(params['id'], 10);
    
      //Author findById
      this.authorService.findById(id).subscribe((data) => {
        this.author = data; });

      //Books: findAllId
        this.bookService.findAllByAuthorId(id).subscribe((data) =>{
          this.books = data;
        });
      });


  }   
}


