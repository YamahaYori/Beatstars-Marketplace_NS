import { NgModule } from '@angular/core';

import { NativeScriptModule } from 'nativescript-angular/nativescript.module';
import { NativeScriptUISideDrawerModule } from 'nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives';

import { SideDrawerPageComponent } from './side-drawer-page';
import { SideNavComponent } from '../../components/side-nav/side-nav.component';
import { BorderlessBtnDirective } from './borderless-btn.directive';
import { TNSFontIconModule } from 'nativescript-ng2-fonticon';

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptUISideDrawerModule,
    TNSFontIconModule.forRoot({
      'mdi': 'material-design-icons.css'
    })
  ],
  declarations: [
    SideDrawerPageComponent,
    SideNavComponent,
    BorderlessBtnDirective
  ],
  exports: [
    SideDrawerPageComponent,
    SideNavComponent,
    BorderlessBtnDirective
  ]
})
export class SharedModule {

}
