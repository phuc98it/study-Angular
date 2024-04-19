import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../interfaces/article.interface';
import { ArticleService } from '../services/article.service';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrl: './article-list.component.css'
})
export class ArticleListComponent implements OnInit {
  articles$: Observable<Article[]>;
  constructor(private _api: ArticleService) {}

  ngOnInit(): void {
    this.articles$ = this._api.getArticles();
  }
}
