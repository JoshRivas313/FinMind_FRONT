import { Routes } from '@angular/router';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { BillsComponent } from './pages/bills/bills.component';
import { ConfigurationComponent } from './pages/configuration/configuration.component';

export const routes: Routes = [

  {
    path: 'auth',
    children: [
      {
        path: 'login',
        component: LoginComponent,
        title: 'Iniciar sesión'
      },
      {
        path: 'register',
        component: RegisterComponent,
        title: 'Crear cuenta'
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      }
    ]
  },

  {
    path:"bills",
    component: BillsComponent,
    title: "Gastos"
  },

  {
    path:"configuration",
    component:ConfigurationComponent,
    title:"Configuracion"
  },

  {
    path: '',
    redirectTo: 'auth/login',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'auth/login'
  }
];
