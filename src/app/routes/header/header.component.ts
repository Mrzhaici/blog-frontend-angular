import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';

interface Navigation {
  id: string;
  name: string;
  children?: Navigation
}

@Component({
  selector: 'blog-header',
  standalone: true,
  imports: [
    CommonModule,
    TranslocoModule 
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.less',
})
export class HeaderComponent {

  protected nav: Navigation[] = [
    {
      id: "1",
      name: "blog.home"
    },
    {
      id: "2",
      name: "blog.article"
    },
    {
      id: "3",
      name: "blog.photography.show"
    },
    {
      id: "4",
      name: "blog.introduction"
    },
  ];

}
