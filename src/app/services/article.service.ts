import { Injectable } from '@angular/core';
import { Observable, delay, find, of } from 'rxjs';
import { Article } from '../interfaces/article.interface';

const articles: Article[] = [
  {
    id: '1',
    slug: 'bai-viet-1',
    title: 'Bai viet 1',
    content: 'Day la noi dung bai viet 1',
    updateAt: '2020-07-06T13:26:31.785Z',
  },
  {
    id: '2',
    slug: 'bai-viet-2',
    title: 'Bai viet 2',
    content: 'Day la noi dung bai viet 2 nhe',
    updateAt: '2020-07-15:00:00.000Z',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  getArticles(slug? : string): Observable<Article[]> {
    return of(articles).pipe(delay(500));
  }

  // getArticle(slug : string): Observable<Article> {
  //   const article = articles.find(x => x.slug === slug);
  //   return of(article).pipe(filter(x => x.slug === slug));
  // }
}
