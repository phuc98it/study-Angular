import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from '../services/article.service';
import { Article } from '../interfaces/article.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html',
  styleUrl: './article-detail.component.css'
})
export class ArticleDetailComponent implements OnInit {
  article$: Observable<Article[]>;

  constructor(
    private _route: ActivatedRoute,
    private _api: ArticleService
  ) {}
  
  ngOnInit(): void {
    let slug = this._route.snapshot.paramMap.get('slug');
    if(slug) {
      this.article$ = this._api.getArticles(slug);
    }
  }
  
  
}
