"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var side_drawer_directives_1 = require("nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives");
var side_drawer_page_1 = require("./side-drawer-page");
var side_nav_component_1 = require("../../components/side-nav/side-nav.component");
var top_nav_component_1 = require("../../components/top-nav/top-nav.component");
var borderless_btn_directive_1 = require("./borderless-btn.directive");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            side_drawer_directives_1.NativeScriptUISideDrawerModule,
            nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'material-design-icons.css'
            })
        ],
        declarations: [
            side_drawer_page_1.SideDrawerPageComponent,
            side_nav_component_1.SideNavComponent,
            top_nav_component_1.TopNavComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ],
        exports: [
            side_drawer_page_1.SideDrawerPageComponent,
            side_nav_component_1.SideNavComponent,
            borderless_btn_directive_1.BorderlessBtnDirective
        ]
    })
], SharedModule);
exports.SharedModule = SharedModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDRHQUFtSDtBQUVuSCx1REFBNkQ7QUFDN0QsbUZBQWdGO0FBQ2hGLGdGQUE2RTtBQUM3RSx1RUFBb0U7QUFDcEUsdUVBQThEO0FBc0I5RCxJQUFhLFlBQVk7SUFBekI7SUFFQSxDQUFDO0lBQUQsbUJBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFlBQVk7SUFwQnhCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQix1REFBOEI7WUFDOUIsNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsMkJBQTJCO2FBQ25DLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLDBDQUF1QjtZQUN2QixxQ0FBZ0I7WUFDaEIsbUNBQWU7WUFDZixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBdUI7WUFDdkIscUNBQWdCO1lBQ2hCLGlEQUFzQjtTQUN2QjtLQUNGLENBQUM7R0FDVyxZQUFZLENBRXhCO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtZHJhd2VyLXBhZ2UnO1xuaW1wb3J0IHsgU2lkZU5hdkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IFRvcE5hdkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlIH0gZnJvbSAnLi9ib3JkZXJsZXNzLWJ0bi5kaXJlY3RpdmUnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRVSVNpZGVEcmF3ZXJNb2R1bGUsXG4gICAgVE5TRm9udEljb25Nb2R1bGUuZm9yUm9vdCh7XG4gICAgICAnbWRpJzogJ21hdGVyaWFsLWRlc2lnbi1pY29ucy5jc3MnXG4gICAgfSlcbiAgXSxcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgU2lkZU5hdkNvbXBvbmVudCxcbiAgICBUb3BOYXZDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgU2lkZURyYXdlclBhZ2VDb21wb25lbnQsXG4gICAgU2lkZU5hdkNvbXBvbmVudCxcbiAgICBCb3JkZXJsZXNzQnRuRGlyZWN0aXZlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgU2hhcmVkTW9kdWxlIHtcblxufVxuIl19