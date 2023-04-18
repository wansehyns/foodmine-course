import { Component, Input } from '@angular/core';
import { AbstractControl, Form, FormControl } from '@angular/forms';

@Component({
  selector: 'text-input',
  templateUrl: './text-input.component.html',
  styleUrls: ['./text-input.component.css']
})
export class TextInputComponent {
  @Input()
  control!:AbstractControl;

  @Input()
  showErrorsWhen:boolean = true;

  @Input()
  label!: string;

  @Input()
  bgColor = 'white';

  @Input()
  type: 'text' | 'password' | 'email' = 'text';

  get formControl() {
    return this.control as FormControl;
  }
}
