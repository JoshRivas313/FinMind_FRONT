import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-button-nav',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-nav.component.html',
  styleUrl: './button-nav.component.scss'
})

export class ButtonNavComponent {


  @Input() label = 'Comenzar';
  @Input() route?: string;
  @Input() loading = false;
  @Input() disabled = false;
  @Input() full = true;
  @Output() action = new EventEmitter();

  constructor(private router: Router) {}

  handleClick() {
    if (this.loading || this.disabled) return;

    if (this.route) {
      this.router.navigate([this.route]);
      return;
    }

    this.action.emit();
  }

}
