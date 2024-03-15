import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgxSyueComponent } from 'ngx-syue';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgxSyueComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'example-ngx-syue';
}
