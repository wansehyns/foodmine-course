import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { AbstractControl } from '@angular/forms';

const VALIDATORS_MESSAGES: any = {
  required: 'This field is required',
  email: 'This field must be a valid email'
}

@Component({
  selector: 'input-validation',
  templateUrl: './input-validation.component.html',
  styleUrls: ['./input-validation.component.css']
})
export class InputValidationComponent implements OnInit, OnChanges {

  @Input()
  control!:AbstractControl;

  @Input()
  showErrorsWhen:boolean = true;

  errorMessages: string[] = [];

  ngOnChanges(changes: SimpleChanges): void {
    this.checkValidations();
  }

  ngOnInit(): void {
    this.control.statusChanges.subscribe(() => {
      this.checkValidations();
    });
    this.control.valueChanges.subscribe(() => {
      this.checkValidations();
    });
  }


  checkValidations() {
    const errors = this.control.errors;

    if (!errors) {
      this.errorMessages = [];
      return;
    }

    const errorKeys = Object.keys(errors);
    this.errorMessages = errorKeys.map(key => VALIDATORS_MESSAGES[key]);
  }
}
