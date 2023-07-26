import { Component, HostBinding} from '@angular/core';
import { Article } from './article.model';
import { Input } from '@angular/core';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent {


  @HostBinding('attr.class') cssClass = 'row';
  @Input() article: Article;

  constructor() {
    
  }

  voteUp():boolean {
    this.article.voteUp();
    return false;
  }

  voteDown():boolean {
    this.article.voteDown();
    return false;
  }

 
}
