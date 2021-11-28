import { Component, OnInit, ChangeDetectionStrategy, Optional, Self, Input } from '@angular/core';
import { ControlValueAccessor, FormGroup, NgControl, FormBuilder } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-custom-textarea',
  templateUrl: './custom-textarea.component.html',
  styleUrls: ['./custom-textarea.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CustomTextareaComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomTextareaComponent
  implements ControlValueAccessor, MatFormFieldControl<any>, OnInit {

  stateForm: FormGroup;

  value: any;
  stateChanges!: Observable<void>;
  id!: string;
  focused!: boolean;
  empty!: boolean;
  shouldLabelFloat!: boolean;
  required!: boolean;
  disabled!: boolean;
  errorState!: boolean;
  controlType?: string;
  autofilled?: boolean;

  @Input() placeholder: any;

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
      valueText: ['', this.ngControl],
    });

  }
  ngOnInit(): void {
  }

  setDescribedByIds(ids: string[]): void {
    throw new Error('Method not implemented.');
  }

  onContainerClick(event: MouseEvent): void {
    throw new Error('Method not implemented.');
  }

  writeValue(obj: any): void {
    this.stateForm.patchValue({
      valueText: obj
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

  handleInput(event: Event): void {
    this.onChange(this.stateForm.get('valueText')?.value);
  }
}
