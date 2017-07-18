import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'top-nav',
  templateUrl: 'components/top-nav/top-nav.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TopNavComponent {
  @Output() onToggleSideNav = new EventEmitter()
  text: string = 'Top-Nav';
  onTapSidebar() {
    this.onToggleSideNav.emit();
  }
}
