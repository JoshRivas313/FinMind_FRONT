import { of, throwError, delay } from 'rxjs';
import { AuthResponse, LoginRequest } from '../core/auth/auth.types';

export class AuthMock {

  private readonly MOCK_EMAIL = 'juan@ej.com';


  login(req: LoginRequest) {
    if (req.email === this.MOCK_EMAIL) {
      const token: AuthResponse = { token: 'mock-jwt-' + crypto.randomUUID() };
      return of(token).pipe(delay(800));
    }

    return throwError(() => ({
      status: 401,
      message: 'El email no tiene acceso'
    })).pipe(delay(400));
  }
}
