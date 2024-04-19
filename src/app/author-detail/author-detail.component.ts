import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Author } from '../interfaces/author.interface';

@Component({
  selector: 'app-author-detail',
  templateUrl: './author-detail.component.html',
  styleUrl: './author-detail.component.css'
})
export class AuthorDetailComponent implements OnInit {
  @Input() author: Author | undefined;
  @Output() deleteAuthor = new EventEmitter<Author>();
  constructor() {}
  ngOnInit() {}
  handleDelete() {
    this.deleteAuthor.emit(this.author);
  }
}
