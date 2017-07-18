import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: 'components/top-nav/top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {
  text: string = 'Top-Nav';
}
