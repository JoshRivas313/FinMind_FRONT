import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

export interface TransactionRecord {
  description: string;
  category: string;
  date: string;     // fecha ISO
  uiDate?: string;  // 24 Oct (visible)
  amount: number;
}

@Component({
  selector: 'tableHistory',
  standalone: true,
  imports: [CommonModule, MatTableModule],
  templateUrl: './history-table.component.html',
  styleUrl: './history-table.component.scss'
})
export class HistoryTableComponent implements OnInit {

  displayedColumns = ['description', 'category', 'uiDate', 'amount'];

  columnDefs = [
    { name: 'description' },
    { name: 'category' },
    { name: 'uiDate' },
    { name: 'amount' }
  ];

  allData: TransactionRecord[] = [
    { description: 'Almuerzo de trabajo', category: 'Comida', date: '2025-11-05', amount: -15.00 },
    { description: 'Sueldo Octubre', category: 'Ingreso', date: '2025-11-03', amount: 2000.00 },
    { description: 'Factura de luz', category: 'Hogar', date: '2025-10-31', amount: -65.80 },
    { description: 'Gasolina', category: 'Transporte', date: '2025-10-29', amount: -40.00 },
    { description: 'Supermercado', category: 'Comida', date: '2025-10-25', amount: -112.50 },
    { description: 'Entradas de cine', category: 'Ocio', date: '2025-10-23', amount: -25.00 },
     { description: 'Prueba', category: 'Ocio', date: '2025-10-23', amount: -25.00 }
  ];

  todayRows: TransactionRecord[] = [];
  weekRows: TransactionRecord[] = [];
  pastRows: TransactionRecord[] = [];

  ngOnInit() {
    this.formatDates();
    this.groupTransactions();
  }

  private formatDates() {
    this.allData = this.allData.map(i => ({
      ...i,
      uiDate: new Date(i.date).toLocaleDateString('es-ES', { day: '2-digit', month: 'short' })
    }));

    this.allData.sort((a, b) => +new Date(b.date) - +new Date(a.date));
  }

  private groupTransactions() {
    const today = new Date();
    const startOfToday = new Date(today.setHours(0, 0, 0, 0));

    const weekStart = new Date(startOfToday);
    weekStart.setDate(startOfToday.getDate() - 7);

    this.todayRows = this.allData.filter(t =>
      new Date(t.date).toDateString() === startOfToday.toDateString()
    );

    this.weekRows = this.allData.filter(t => {
      const d = new Date(t.date);
      return d > weekStart && d < startOfToday;
    });

    this.pastRows = this.allData.filter(t =>
      new Date(t.date) <= weekStart
    );
  }
}
