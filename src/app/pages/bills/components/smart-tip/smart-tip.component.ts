import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { LucideAngularModule, Brain } from 'lucide-angular';


@Component({
  selector: 'smart-tips',
  standalone: true,
  imports: [LucideAngularModule, CommonModule, MatCardModule, MatIconModule],
  templateUrl: './smart-tip.component.html',
  styleUrl: './smart-tip.component.scss'
})
export class SmartTipComponent {
  readonly FileIcon = Brain;



  @Input() spent: number = 0;
  @Input() category: string = 'Comida';

  get formattedSpent(): string {
    return this.spent.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
  }
}
