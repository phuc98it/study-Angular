import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleDetailComponent } from '../article-detail/article-detail.component';
import { ArticleListComponent } from '../article-list/article-list.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
  {
    path: 'article',
    children: [
      { path: 'detail/:slug', component: ArticleDetailComponent },
      { path: 'list', component: ArticleListComponent },
    ]
  },
];

@NgModule({
  declarations: [
    ArticleDetailComponent,
    ArticleListComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class ArticleModule { }
