import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { LoadingService } from '../../loading.service';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  form;
  error = '';

  constructor(
    private fb: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private loading: LoadingService
  ) {
    this.form = this.fb.group({
      username: ['master-admin@mercatto.com', [Validators.required, Validators.email]],
      password: ['12345678#', Validators.required]
    });
  }

  submit() {
    if (this.form.invalid) return;
    this.loading.show();
    this.error = '';
    const { username, password } = this.form.value;
    this.auth.login({ username: username!, password: password! }).subscribe({
      next: () => {
        this.loading.hide();
        this.router.navigate(['/dashboard']);
      },
      error: (err) => {
        this.loading.hide();
        this.error = err.error?.message || 'Login failed';
      }
    });
  }
}
