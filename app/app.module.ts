import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

import { TracklistContainer } from './containers/tracklist/tracklist.container';
import { SharedModule } from './modules/shared';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule
  ],
  declarations: [
    AppComponent,
    TracklistContainer
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
