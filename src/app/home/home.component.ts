import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { RoutePath } from '../app.routes';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnDestroy {
  @HostBinding('class')
  hostClasses: string =
    'mx-auto max-w-xl flex flex-col w-full h-full p-5 gap-5 items-center justify-center text-gray-900';

  isLoading: boolean = false;

  private _hostDestroyed$: Subject<void> = new Subject();

  constructor(
    private _cd: ChangeDetectorRef,
    private _router: Router,
    private _authService: AuthService,
  ) {}

  ngOnDestroy(): void {
    this._hostDestroyed$.next();
    this._hostDestroyed$.complete();
  }

  onClicked(): void {
    this.isLoading = true;
    this._cd.markForCheck();
    this._authService
      .logout()
      .pipe(takeUntil(this._hostDestroyed$))
      .subscribe(() => {
        this._router.navigate([RoutePath.LOGIN]);
      });
  }
}
