import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from './auth/auth.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FontAwesomeModule, CommonModule, AsyncPipe],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'mercatto-admin';
  faCoffee = faCoffee;
  loading$;
  constructor(public auth: AuthService, private loading: LoadingService) {
    this.loading$ = this.loading.loading$;
  }

  logout() {
    this.auth.logout();
  }
}
