import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
interface MenuItem {
  icon: string;
  label: string;
  route: string;
}
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule, RouterModule, MatIconModule, MatListModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
router = inject(Router);
  
  isOpen = false;

  menuItems: MenuItem[] = [
    { icon: 'ti ti-receipt', label: 'Gastos', route: '/gastos' },
    { icon: 'ti ti-chart-donut',     label: 'Presupuesto', route: '/presupuesto' },
    { icon: 'ti ti-robot-face',     label: 'Chatbot', route: '/chatbot' },
    { icon: 'ti ti-settings',      label: 'Configuración', route: '/configuracion' },
  ];

  toggle() {
    this.isOpen = !this.isOpen;
  }

  isActive(route: string): boolean {
    // return this.router.url === route;
    return true;
  }
}
