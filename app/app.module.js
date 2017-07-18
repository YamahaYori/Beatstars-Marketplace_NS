"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routes_1 = require("./app.routes");
var app_container_1 = require("./containers/app/app.container");
var free_music_container_1 = require("./containers/free-music/free-music.container");
var shared_1 = require("./modules/shared");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routes_1.AppRoutingModule,
            shared_1.SharedModule,
            nativescript_ng2_fonticon_1.TNSFontIconModule.forRoot({
                'mdi': 'material-design-icons.css'
            })
        ],
        declarations: [
            app_container_1.AppComponent,
            free_music_container_1.FreeMusicContainerComponent
        ],
        bootstrap: [app_container_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBRTlFLDJDQUFnRDtBQUNoRCxnRUFBOEQ7QUFFOUQscUZBQTJGO0FBQzNGLDJDQUFnRDtBQUNoRCx1RUFBOEQ7QUFpQjlELElBQWEsU0FBUztJQUF0QjtJQUVBLENBQUM7SUFBRCxnQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksU0FBUztJQWZyQixlQUFRLENBQUM7UUFDUixPQUFPLEVBQUU7WUFDUCx3Q0FBa0I7WUFDbEIsNkJBQWdCO1lBQ2hCLHFCQUFZO1lBQ1osNkNBQWlCLENBQUMsT0FBTyxDQUFDO2dCQUN4QixLQUFLLEVBQUUsMkJBQTJCO2FBQ25DLENBQUM7U0FDSDtRQUNELFlBQVksRUFBRTtZQUNaLDRCQUFZO1lBQ1osa0RBQTJCO1NBQzVCO1FBQ0QsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO0dBQ1csU0FBUyxDQUVyQjtBQUZZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0TW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZSc7XG5cbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC5yb3V0ZXMnO1xuaW1wb3J0IHsgQXBwQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXJzL2FwcC9hcHAuY29udGFpbmVyJztcblxuaW1wb3J0IHsgRnJlZU11c2ljQ29udGFpbmVyQ29tcG9uZW50IH0gZnJvbSAnLi9jb250YWluZXJzL2ZyZWUtbXVzaWMvZnJlZS1tdXNpYy5jb250YWluZXInO1xuaW1wb3J0IHsgU2hhcmVkTW9kdWxlIH0gZnJvbSAnLi9tb2R1bGVzL3NoYXJlZCc7XG5pbXBvcnQgeyBUTlNGb250SWNvbk1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5ATmdNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgU2hhcmVkTW9kdWxlLFxuICAgIFROU0ZvbnRJY29uTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgJ21kaSc6ICdtYXRlcmlhbC1kZXNpZ24taWNvbnMuY3NzJ1xuICAgIH0pXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogW1xuICAgIEFwcENvbXBvbmVudCxcbiAgICBGcmVlTXVzaWNDb250YWluZXJDb21wb25lbnRcbiAgXSxcbiAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xuXG59XG4iXX0=