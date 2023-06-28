import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from '../models/book.model';
import { BookService } from '../services/book.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthorService } from 'src/app/authors/services/author.service';
import { IAuthor } from 'src/app/authors/models/author.model';
import { CategoryService } from 'src/app/categories/services/category.service';
import { ICategory } from 'src/app/categories/models/category.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})

/**
 1. Agregar campo id en FormGroup
 2. En HTML agregar un nuevo matformfield disabled que muestre id pero no lo edite
 3.En save hacer distinción de guardar o editar
 4. En loadForm hay que cargar el id
 */
export class BookFormComponent implements OnInit {

  bookForm = new FormGroup({
    id: new FormControl<number>(0),
    title: new FormControl<string>('', [Validators.required, Validators.minLength(5), Validators.maxLength(100)]),
    sinopsis: new FormControl<string>('', [Validators.maxLength(1000)]),
    numPages: new FormControl<number>(0, [Validators.min(30)]),
    price: new FormControl<number>(0, [
      Validators.required, Validators.min(5), Validators.max(500), Validators.pattern("^[0-9]+([.,][0-9]{1,2})?$")]),
    release: new FormControl<Date>(new Date()),
    authorId: new FormControl<number>(0, [Validators.required]),
    categories: new FormControl<number[]>([])
    
  });

  authors: IAuthor[] = [];
  categories: ICategory[] = [];

  constructor(private bookService : BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private authorService: AuthorService,
              private categoryService: CategoryService){}

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params => {
      const idString =params['id'];
      if(!idString) return;

      const id = parseInt(idString, 10);
      this.bookService.findById(id).subscribe(book => this.loadBookForm(book));
    });
    //Cargar los autores
    this.authorService.findAll().subscribe(data => this.authors = data);
    this.categoryService.findAll().subscribe(data => this.categories = data);
  }

  loadBookForm(book: IBook): void{
    this.bookForm.reset({
      id: book.id,
      title: book.title,
      sinopsis: book.sinopsis,
      numPages: book.numPages,
      price: book.price,
      release: book.release,
      authorId: book.authorId,
      categories: book.categories
    });
  }

  save():void{
    let id = this.bookForm.get('id')?.value ?? 0;// si no tiene id lo crea
    let title = this.bookForm.get('title')?.value ?? '';
    let sinopsis = this.bookForm.get('sinopsis')?.value ?? '';
    let numPages = this.bookForm.get('numPages')?.value ?? 30;
    let price = this.bookForm.get('price')?.value ?? 5;
    let release = this.bookForm.get('release')?.value ?? new Date();
    let photo = "http://dummyimage.com/170x100.png/dddddd/000000";
    let authorId = this.bookForm.get('author.id')?.value ?? 0;
    let categories = this.bookForm.get('categories')?.value ?? [];
    
    //Crear objeto desde la interfaz
    //Añadir validación extra de datos, si alguno está mal hacer un return y mostrar error y no guardar
    
    
    let book: IBook = {
      id: id,
      title: title,
      sinopsis: sinopsis,
      release: release,
      numPages: numPages,
      photo: photo,
      price: price,
      authorId: authorId,
      categories: categories
    }
    if (id === 0)// crear libro
      this.bookService.create(book).subscribe(book => this.router.navigate (['/books', book.id]));
    else // editar libro
      this.bookService.update(book).subscribe(book => this.router.navigate (['/books', book.id]));
  }

  

}
