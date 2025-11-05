import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-button-submit',
  standalone: true,
  imports: [],
  templateUrl: './button-submit.component.html',
  styleUrl: './button-submit.component.scss'
})
export class ButtonSubmitComponent {

  @Input() text: string = 'Enviar';
  @Input() loadingText: string = 'Cargando...';
  @Input() disabled: boolean = false;

  loading = signal(false);

  @Input() set isLoading(value: boolean) {
    this.loading.set(value);
  }

}
