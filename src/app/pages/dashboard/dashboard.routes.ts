import { Routes } from "@angular/router";
import { BillsComponent } from "../bills/bills.component";
import { ConfigurationComponent } from "../configuration/configuration.component";

export const routes: Routes = [

  {
    path: '',
    resolve:[
      // Esto se resuelve si el usuario esta logeado   
    ],
   loadComponent: ()=> import('../dashboard/dashboard.component').then(e=> e.DashboardComponent),
    children: [
  {
    path:"bills",
    loadComponent: ()=> import('../bills/bills.component').then(e=> e.BillsComponent),
    title: "Gastos"
  },

  {
    path:"configuration",
    loadComponent:()=> import('../configuration/configuration.component').then(e=> e.ConfigurationComponent),
    title:"Configuracion"
  },
    ]
  },

];