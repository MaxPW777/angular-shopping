import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  public formGroup: FormGroup;

  public constructor() {
      this.formGroup = new FormGroup({
      name: new FormControl(''),
      address: new FormControl(''),
      });
  }

  public onSubmit(): void {
      console.log(this.formGroup.value);
  }
}
