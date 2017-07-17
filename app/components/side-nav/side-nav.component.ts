import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: 'components/side-nav/side-nav.component.html',
  styleUrls: ['components/side-nav/side-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  text: string = 'Side-Nav';
}
