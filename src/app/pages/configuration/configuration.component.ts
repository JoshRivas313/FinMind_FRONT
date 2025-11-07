import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatCard } from "@angular/material/card";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatIcon } from "@angular/material/icon";

@Component({
  selector: 'app-configuration',
  standalone: true,
  imports: [MatCard, MatFormField, MatLabel, MatIcon],
  templateUrl: './configuration.component.html',
  styleUrl: './configuration.component.scss'
})

export class ConfigurationComponent {


}
