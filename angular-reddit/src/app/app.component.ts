import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  addArticle(title:HTMLInputElement, link: HTMLInputElement):boolean {
    console.log(`Adding article titled: ${title.value} and link ${link.value}`);
    return false;
  }
}
