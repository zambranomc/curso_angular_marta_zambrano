import { Component, OnInit } from '@angular/core';
import { CommentService } from '../services/comment.service';
import { IComment } from '../models/comment.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-comment-list',
  templateUrl: './comment-list.component.html',
  styleUrls: ['./comment-list.component.css']
})
export class CommentListComponent implements OnInit {
  comment: any;

  displayedColumns: string[] = ['id', 'name', 'email', 'actions'];

  comments: IComment[] = [];

  constructor(private commentService: CommentService, 
              private router: Router){}

  ngOnInit(): void {
    this.commentService.findAll().subscribe(data => this.comments = data );
  }

 view(comment: IComment){
  this.router.navigate(['/comments', comment.id]); // /comments/4 lleva a la vista que quiero ver
 }

}
