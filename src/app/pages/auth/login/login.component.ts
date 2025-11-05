import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterOutlet } from '@angular/router';
import { LucideAngularModule, Mail, Lock } from 'lucide-angular';
import { MatFormField, MatLabel } from "@angular/material/form-field";

// Angular Material
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
  CommonModule,
  ReactiveFormsModule,
  MatFormFieldModule,
  MatInputModule,
  MatCardModule,
  MatButtonModule
],


  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {


  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);


  constructor(
    private router: Router
  ) {
  }

  goRegister() {
    this.router.navigate(['/auth/register']);
  }



}
