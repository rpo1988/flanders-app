import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-error-msg',
  standalone: true,
  template: `<span class="flex text-xs text-red-500"><ng-content></ng-content></span>`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ErrorMsgComponent {}
