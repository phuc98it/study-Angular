import { Component, OnInit } from '@angular/core';
import { authors } from '../data/author';
import { Author } from '../interfaces/author.interface';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrl: './author-list.component.css'
})
export class AuthorListComponent implements OnInit {
  checked = true;
  authors = authors;

  // case: ng-content
  questions = {
    question1: true,
    question2: false
  };
  
  constructor() {}
  ngOnInit() {}
  async handleDelete(author: Author) {
    this.authors = await this.authors.filter((item) => item.id !== author.id);
  }
}
