import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './containers/app/app.container';
import { TopNavComponent } from './components/top-nav/top-nav.component';

import { FreeMusicContainerComponent } from './containers/free-music/free-music.container';
import { SharedModule } from './modules/shared';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
  imports: [
    NativeScriptModule,
    AppRoutingModule,
    SharedModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  declarations: [
    AppComponent,
    TopNavComponent,
    FreeMusicContainerComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
