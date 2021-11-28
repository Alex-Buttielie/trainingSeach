import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Optional, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormGroup, NgControl } from '@angular/forms';
import { MatFormFieldControl } from '@angular/material/form-field';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss'],
  providers: [{ provide: MatFormFieldControl, useExisting: CustomInputComponent }],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomInputComponent
  implements ControlValueAccessor, MatFormFieldControl<any>, OnInit {

  _value: any;
  disabled = false;
  stateChanges = new Subject<void>();
  id!: string;
  focused!: boolean;
  empty!: boolean;
  shouldLabelFloat!: boolean;
  errorState!: boolean;
  controlType?: string;
  autofilled?: boolean;

  @Input() customHint: any;
  @Input() placeholder: any;
  @Input() required = false;
  @Input() mascara: any;
  @Input() decimal = false;
  @Input() maxlength: any;
  @Input() type = 'text';

  @Output() keyEvent = new EventEmitter();
  @Output() enterKeyEvent = new EventEmitter();

  stateForm: FormGroup;

  onChange = (_: any) => { };
  onTouched = () => { };

  @Input()
  get value(): any {
    return this._value;
  }
  set value(value: any) {
    this._value = value;
    this.stateChanges.next();
  }

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
    this.stateForm.get('valueText')
      ?.valueChanges
      .subscribe(v => {
        this.atulizarModel();
      });
  }

  setDescribedByIds(ids: string[]): void {
  }

  onContainerClick(event: MouseEvent): void {
  }

  clearInput() {
    console.log('clear');
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

  eventoTeclado(event:KeyboardEvent) {
    this.keyEvent.emit(event);

    if(event.key === 'Enter') {
      this.enterKeyEvent.emit(event);
    }
  }

  private atulizarModel() {
    this.onChange(this.stateForm.get('valueText')?.value);
  }
}
