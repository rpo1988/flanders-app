import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RoutePath } from '../../app.routes';
import { ErrorMsgComponent } from '../../shared/components/error-msg/error-msg.component';
import { InputComponent } from '../../shared/components/input/input.component';
import { AuthService } from '../auth.service';

enum FormItem {
  USERNAME = 'username',
  PASSWORD = 'password',
}

type Form = FormGroup<{
  [FormItem.USERNAME]: FormControl<string>;
  [FormItem.PASSWORD]: FormControl<string>;
}>;

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, InputComponent, RouterModule, ErrorMsgComponent],
  templateUrl: './login.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnDestroy {
  form: Form;
  controlName: typeof FormItem = FormItem;
  loading: boolean = false;
  showError: boolean = false;

  @HostBinding('class')
  hostClasses: string = 'flex flex-col w-full h-full p-5 items-center justify-center text-gray-900';

  private _hostDestroyed$: Subject<void> = new Subject();

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _authService: AuthService,
  ) {
    this.form = this._buildForm();
  }

  ngOnDestroy(): void {
    this._hostDestroyed$.next();
    this._hostDestroyed$.complete();
  }

  onSubmit(): void {
    this.showError = false;
    this.loading = true;
    this._cd.markForCheck();
    this._authService
      .login({
        username: this.form.value[FormItem.USERNAME]!,
        password: this.form.value[FormItem.PASSWORD]!,
      })
      .pipe(takeUntil(this._hostDestroyed$))
      .subscribe((isAuthenticated) => {
        if (!isAuthenticated) {
          this.loading = false;
          this.showError = true;
          this._cd.markForCheck();
          return;
        }
        this._router.navigate([RoutePath.HOME]);
      });
  }

  private _buildForm(): Form {
    const _form = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(4)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4)]),
    }) as Form;
    _form.valueChanges.pipe(takeUntil(this._hostDestroyed$)).subscribe(() => {
      this.showError = false;
      this._cd.markForCheck();
    });
    return _form;
  }
}
