import { ChangeDetectionStrategy, Component, Input, OnInit, Optional, Self } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';
import { MatDateFormats, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS } from '@angular/material/core';

import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import { MomentDateAdapter, MAT_MOMENT_DATE_ADAPTER_OPTIONS } from '@angular/material-moment-adapter';

const moment = _moment;

export const MOMENT_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: Date
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM Y',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM Y'
  }
};

@Component({
  selector: 'app-custom-input-date',
  templateUrl: './custom-input-date.component.html',
  styleUrls: ['./custom-input-date.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    { provide: MAT_DATE_FORMATS, useValue: MOMENT_DATE_FORMATS }
  ]
})
export class CustomInputDateComponent
  implements ControlValueAccessor, MatFormFieldControl<any>, OnInit {

  value: any;
  stateChanges!: Observable<void>;
  id!: string;
  focused!: boolean;
  empty!: boolean;
  shouldLabelFloat!: boolean;
  disabled!: boolean;
  errorState!: boolean;
  controlType?: string;
  autofilled?: boolean;

  @Input() placeholder: any;
  @Input() required: any;

  stateForm: FormGroup;

  onChange = (_: any) => { };
  onTouched = () => { };

  constructor(
    formBuilder: FormBuilder,
    @Optional() @Self() public ngControl: NgControl
  ) {
    if (this.ngControl != null) {
      this.ngControl.valueAccessor = this;
    }

    this.stateForm = formBuilder.group({
      dataValue: ['', this.ngControl],
    });
  }

  ngOnInit(): void {
  }

  setDescribedByIds(ids: string[]): void {
  }

  onContainerClick(event: MouseEvent): void {
  }

  writeValue(obj: any): void {
    this.stateForm.patchValue({
      dataValue: obj
    });
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    if (isDisabled) {
      this.stateForm.disable();
    } else {
      this.stateForm.enable();
    }
  }

  dateInputEvent($event: any) {
  }

  dateChangeEvent(event: { value: any; }) {
    this.onChange(event?.value);
  }

}
