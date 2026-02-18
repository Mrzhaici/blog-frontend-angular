import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoLangService } from './core/translocoService';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
})
export class AppComponent {

  constructor(public translocoLangService: TranslocoLangService) {

  }

}

