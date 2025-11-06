import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { LucideAngularModule, FileIcon } from 'lucide-angular';
import { MatIcon } from "@angular/material/icon";
import { MatDividerModule } from '@angular/material/divider';
import { HistoryTableComponent } from "./components/history-table/history-table.component";
import { MatCard } from "@angular/material/card";
import { SmartTipComponent } from "./components/smart-tip/smart-tip.component";

export interface TransactionRecord {
  amount: number;
}

@Component({
  selector: 'app-bills',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    LucideAngularModule,
    MatIcon,
    MatDividerModule,
    HistoryTableComponent,
    MatCard,
    SmartTipComponent
],
  templateUrl: './bills.component.html',
  styleUrl: './bills.component.scss'
})

export class BillsComponent {

  categories = ['Comida', 'Hogar', 'Transporte', 'Ingreso', 'Ocio', 'Otros'];

  @Input() data: TransactionRecord[] = [];

  totalExpenses = 20;
  totalIncomes = 3;
  netBalance = 10;

  ngOnChanges(): void {
    this.calculateTotals();
  }

  private calculateTotals() {
    this.totalExpenses = this.data
      .filter(t => t.amount < 0)
      .reduce((sum, t) => sum + t.amount, 0);

    this.totalIncomes = this.data
      .filter(t => t.amount > 0)
      .reduce((sum, t) => sum + t.amount, 0);

    this.netBalance = this.totalExpenses + this.totalIncomes;
  }


}
