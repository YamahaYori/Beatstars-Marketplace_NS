"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routes_1 = require("./app.routes");
var app_container_1 = require("./containers/app/app.container");
var top_nav_component_1 = require("./components/top-nav/top-nav.component");
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
            top_nav_component_1.TopNavComponent,
            free_music_container_1.FreeMusicContainerComponent
        ],
        bootstrap: [app_container_1.AppComponent]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsZ0ZBQThFO0FBRTlFLDJDQUFnRDtBQUNoRCxnRUFBOEQ7QUFDOUQsNEVBQXlFO0FBRXpFLHFGQUEyRjtBQUMzRiwyQ0FBZ0Q7QUFDaEQsdUVBQThEO0FBa0I5RCxJQUFhLFNBQVM7SUFBdEI7SUFFQSxDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBRkQsSUFFQztBQUZZLFNBQVM7SUFoQnJCLGVBQVEsQ0FBQztRQUNSLE9BQU8sRUFBRTtZQUNQLHdDQUFrQjtZQUNsQiw2QkFBZ0I7WUFDaEIscUJBQVk7WUFDWiw2Q0FBaUIsQ0FBQyxPQUFPLENBQUM7Z0JBQ3hCLEtBQUssRUFBRSwyQkFBMkI7YUFDbkMsQ0FBQztTQUNIO1FBQ0QsWUFBWSxFQUFFO1lBQ1osNEJBQVk7WUFDWixtQ0FBZTtZQUNmLGtEQUEyQjtTQUM1QjtRQUNELFNBQVMsRUFBRSxDQUFDLDRCQUFZLENBQUM7S0FDMUIsQ0FBQztHQUNXLFNBQVMsQ0FFckI7QUFGWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuXG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSAnLi9hcHAucm91dGVzJztcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVycy9hcHAvYXBwLmNvbnRhaW5lcic7XG5pbXBvcnQgeyBUb3BOYXZDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdG9wLW5hdi90b3AtbmF2LmNvbXBvbmVudCc7XG5cbmltcG9ydCB7IEZyZWVNdXNpY0NvbnRhaW5lckNvbXBvbmVudCB9IGZyb20gJy4vY29udGFpbmVycy9mcmVlLW11c2ljL2ZyZWUtbXVzaWMuY29udGFpbmVyJztcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vbW9kdWxlcy9zaGFyZWQnO1xuaW1wb3J0IHsgVE5TRm9udEljb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtbmcyLWZvbnRpY29uJztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdE1vZHVsZSxcbiAgICBBcHBSb3V0aW5nTW9kdWxlLFxuICAgIFNoYXJlZE1vZHVsZSxcbiAgICBUTlNGb250SWNvbk1vZHVsZS5mb3JSb290KHtcbiAgICAgICdtZGknOiAnbWF0ZXJpYWwtZGVzaWduLWljb25zLmNzcydcbiAgICB9KVxuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBBcHBDb21wb25lbnQsXG4gICAgVG9wTmF2Q29tcG9uZW50LFxuICAgIEZyZWVNdXNpY0NvbnRhaW5lckNvbXBvbmVudFxuICBdLFxuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7XG5cbn1cbiJdfQ==