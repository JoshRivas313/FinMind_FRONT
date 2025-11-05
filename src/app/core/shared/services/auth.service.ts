import { Injectable } from '@angular/core';
import { delay, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly MOCK_EMAIL = 'hurtadorivasj123@gmail.com';
  private readonly MOCK_PASSWORD = 'josefo313';


  constructor() { }

  login(email: string, password: string) {
    if (email === this.MOCK_EMAIL && password === this.MOCK_PASSWORD) {

      const token = 'mock-jwt-' + crypto.randomUUID();

      // ✅ Simulamos respuesta exitosa con retardo (800ms)
      return of({ token }).pipe(delay(800));
    }

    // ❌ Simula error del backend
    return throwError(() => ({
      status: 401,
      message: 'Credenciales incorrectas'
    })).pipe(delay(500));
  }


  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  /**
   * Obtiene token
   */
  getToken(): string | null {
    return localStorage.getItem('token');
  }

  /**
   * Verifica si está autenticado
   */
  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  /**
   * Cierra sesión (logout)
   */
  logout() {
    localStorage.removeItem('token');
  }
}
