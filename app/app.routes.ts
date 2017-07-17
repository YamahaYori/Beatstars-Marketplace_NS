import { NgModule } from '@angular/core';

import { NativeScriptRouterModule } from 'nativescript-angular/router';

import { SideNavComponent } from './components/side-nav/side-nav.component';
import { TracklistContainer } from './containers/tracklist/tracklist.container';

@NgModule({
  imports: [
    NativeScriptRouterModule.forRoot([
      { path: '', component: TracklistContainer },
    ])
  ],
  exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {

}
