"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var side_drawer_directives_1 = require("nativescript-telerik-ui/sidedrawer/angular/side-drawer-directives");
var side_drawer_page_1 = require("./side-drawer-page");
var side_nav_component_1 = require("../../components/side-nav/side-nav.component");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2hhcmVkLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInNoYXJlZC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBQzlFLDRHQUFtSDtBQUVuSCx1REFBNkQ7QUFDN0QsbUZBQWdGO0FBQ2hGLHVFQUFvRTtBQUNwRSx1RUFBOEQ7QUFxQjlELElBQWEsWUFBWTtJQUF6QjtJQUVBLENBQUM7SUFBRCxtQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksWUFBWTtJQW5CeEIsZUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFFO1lBQ1Asd0NBQWtCO1lBQ2xCLHVEQUE4QjtZQUM5Qiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSwyQkFBMkI7YUFDbkMsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFO1lBQ1osMENBQXVCO1lBQ3ZCLHFDQUFnQjtZQUNoQixpREFBc0I7U0FDdkI7UUFDRCxPQUFPLEVBQUU7WUFDUCwwQ0FBdUI7WUFDdkIscUNBQWdCO1lBQ2hCLGlEQUFzQjtTQUN2QjtLQUNGLENBQUM7R0FDVyxZQUFZLENBRXhCO0FBRlksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcblxuaW1wb3J0IHsgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgfSBmcm9tICcuL3NpZGUtZHJhd2VyLXBhZ2UnO1xuaW1wb3J0IHsgU2lkZU5hdkNvbXBvbmVudCB9IGZyb20gJy4uLy4uL2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50JztcbmltcG9ydCB7IEJvcmRlcmxlc3NCdG5EaXJlY3RpdmUgfSBmcm9tICcuL2JvcmRlcmxlc3MtYnRuLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcydcbiAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCxcbiAgICBTaWRlTmF2Q29tcG9uZW50LFxuICAgIEJvcmRlcmxlc3NCdG5EaXJlY3RpdmVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIFNpZGVEcmF3ZXJQYWdlQ29tcG9uZW50LFxuICAgIFNpZGVOYXZDb21wb25lbnQsXG4gICAgQm9yZGVybGVzc0J0bkRpcmVjdGl2ZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFNoYXJlZE1vZHVsZSB7XG5cbn1cbiJdfQ==