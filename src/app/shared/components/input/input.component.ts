import { CommonModule } from '@angular/common';
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostBinding,
  Input,
  Optional,
  Self,
} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';
import { ErrorMsgComponent } from '../error-msg/error-msg.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, FormsModule, ErrorMsgComponent],
  templateUrl: './input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent implements ControlValueAccessor {
  @Input()
  id?: string;

  @Input()
  label?: string;

  @Input()
  type: 'text' | 'password' = 'text';

  @Input()
  disabled: boolean = false;

  @HostBinding('class')
  hostClasses: string = 'flex flex-col justify-start gap-1  items-start';

  value: string = '';
  isHover: boolean = false;
  isFocus: boolean = false;

  onChange: (value: string) => void = () => {};
  onTouched: () => void = () => {};

  constructor(
    private _cd: ChangeDetectorRef,
    @Self() @Optional() private control: NgControl,
  ) {
    if (this.control) {
      this.control.valueAccessor = this;
    }
  }

  get isInvalid(): boolean {
    return !!this.control?.invalid;
  }

  get isTouched(): boolean {
    return !!this.control?.touched;
  }

  get errorMsg(): string {
    return !this.isInvalid || !this.control
      ? ''
      : this.control.errors?.['required']
        ? 'This field is required'
        : this.control.errors?.['minlength']
          ? `The field min length is: ${this.control.errors?.['minlength'].requiredLength}`
          : this.control.errors?.['maxlength']
            ? `The field max length is: ${this.control.errors?.['maxlength'].requiredLength}`
            : 'Invalid value';
  }

  onControlChange(value: string): void {
    this.value = value;
    this.onChange(this.value);
    this._cd.markForCheck();
  }

  onControlHover(isHover: boolean): void {
    this.isHover = !this.disabled && isHover;
    this._cd.markForCheck();
  }

  onControlFocus(): void {
    this.isFocus = !this.disabled;
    this._cd.markForCheck();
  }

  onControlBlur(): void {
    if (!this.disabled) {
      this.isFocus = false;
      this.onTouched();
      this._cd.markForCheck();
    }
  }

  writeValue(value: string): void {
    this.value = value;
    this._cd.markForCheck();
  }

  registerOnChange(fn: () => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }

  setDisabledState(disabled: boolean): void {
    this.disabled = disabled;
    this._cd.markForCheck();
  }
}
