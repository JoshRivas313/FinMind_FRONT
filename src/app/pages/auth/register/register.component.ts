import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})

export class RegisterComponent {

  loading = signal(false);
  submitted = signal(false);

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

  private initForm(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: this.emailFormControl,
      phone: ['', Validators.required],
      budget: ['', Validators.required],
    });
  }

  submit(): void {
    this.submitted.set(true);

    if (this.registerForm.invalid) {
      this.registerForm.markAllAsTouched();
      return;
    }

    this.loading.set(true);

    // Simulación de API / Mock
    setTimeout(() => {
      console.log('✅ Datos enviados:', this.registerForm.value);
      this.loading.set(false);
      alert('Registro exitoso (mock). Ahora puedes iniciar sesión.');
      this.router.navigate(['/auth/login']);
    }, 1500);
  }

  goLogin() {
    this.router.navigate(['/auth/login']);
  }
}
