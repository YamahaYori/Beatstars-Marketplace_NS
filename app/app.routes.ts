import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { FreeMusicContainerComponent } from './containers/free-music/free-music.container';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: FreeMusicContainerComponent },
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
