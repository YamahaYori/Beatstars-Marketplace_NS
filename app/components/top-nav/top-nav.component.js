"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var TopNavComponent = (function () {
    function TopNavComponent() {
        this.onToggleSideNav = new core_1.EventEmitter();
        this.text = 'Top-Nav';
    }
    TopNavComponent.prototype.onTapSidebar = function () {
        this.onToggleSideNav.emit();
    };
    return TopNavComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], TopNavComponent.prototype, "onToggleSideNav", void 0);
TopNavComponent = __decorate([
    core_1.Component({
        selector: 'top-nav',
        templateUrl: 'components/top-nav/top-nav.component.html',
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], TopNavComponent);
exports.TopNavComponent = TopNavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidG9wLW5hdi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0b3AtbmF2LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFnRztBQU9oRyxJQUFhLGVBQWU7SUFMNUI7UUFNWSxvQkFBZSxHQUFHLElBQUksbUJBQVksRUFBRSxDQUFBO1FBQzlDLFNBQUksR0FBVyxTQUFTLENBQUM7SUFJM0IsQ0FBQztJQUhDLHNDQUFZLEdBQVo7UUFDRSxJQUFJLENBQUMsZUFBZSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFDSCxzQkFBQztBQUFELENBQUMsQUFORCxJQU1DO0FBTFc7SUFBVCxhQUFNLEVBQUU7O3dEQUFxQztBQURuQyxlQUFlO0lBTDNCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsU0FBUztRQUNuQixXQUFXLEVBQUUsMkNBQTJDO1FBQ3hELGVBQWUsRUFBRSw4QkFBdUIsQ0FBQyxNQUFNO0tBQ2hELENBQUM7R0FDVyxlQUFlLENBTTNCO0FBTlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndG9wLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxufSlcbmV4cG9ydCBjbGFzcyBUb3BOYXZDb21wb25lbnQge1xuICBAT3V0cHV0KCkgb25Ub2dnbGVTaWRlTmF2ID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gIHRleHQ6IHN0cmluZyA9ICdUb3AtTmF2JztcbiAgb25UYXBTaWRlYmFyKCkge1xuICAgIHRoaXMub25Ub2dnbGVTaWRlTmF2LmVtaXQoKTtcbiAgfVxufVxuIl19