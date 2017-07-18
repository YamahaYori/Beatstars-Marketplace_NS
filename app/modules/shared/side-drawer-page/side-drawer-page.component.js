"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var router_2 = require("nativescript-angular/router");
var page_1 = require("ui/page");
var platform_1 = require("platform");
var action_bar_1 = require("ui/action-bar");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var sidedrawer_1 = require("nativescript-telerik-ui/sidedrawer");
var nativescript_ng2_fonticon_1 = require("nativescript-ng2-fonticon");
var SideDrawerPageComponent = (function () {
    function SideDrawerPageComponent(routerExtensions, activatedRoute, page, fonticon, ngZone) {
        this.routerExtensions = routerExtensions;
        this.activatedRoute = activatedRoute;
        this.page = page;
        this.fonticon = fonticon;
        this.ngZone = ngZone;
        /**
         * On tap of any side-drawer item, hiding content if this flag is true.
         */
        this.isContentVisible = true;
        /**
         * Navigation Menu Items
         */
        this.navMenu = [
            { name: 'Home', commands: ['/'] },
            { name: 'About', commands: ['/about'] },
            { name: 'Contact', commands: ['/contact'] }
        ];
        this.setActionBarIcon(this.page);
        this.setDrawerTransition();
    }
    SideDrawerPageComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
    };
    SideDrawerPageComponent.prototype.ngOnDestroy = function () {
        this.drawer.off('drawerClosed');
    };
    SideDrawerPageComponent.prototype.toggleSideDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    /**
     * Navigates to next page after drawer is closed.
     */
    SideDrawerPageComponent.prototype.navigateTo = function (routeCommands) {
        var _this = this;
        this.drawer.closeDrawer();
        var currentUrl = this.routerExtensions.router.routerState.snapshot.url;
        var newUrlTree = this.routerExtensions.router.createUrlTree(routeCommands);
        var newUrl = this.routerExtensions.router.serializeUrl(newUrlTree);
        if (currentUrl !== newUrl) {
            this.isContentVisible = false;
            this.drawer.on('drawerClosed', function () {
                _this.ngZone.run(function () {
                    _this.routerExtensions.navigate(routeCommands, {
                        clearHistory: true,
                        animated: false
                    });
                    _this.isContentVisible = true;
                    _this.drawer.off('drawerClosed');
                });
            });
        }
    };
    SideDrawerPageComponent.prototype.setDrawerTransition = function () {
        if (platform_1.isAndroid) {
            this.drawerTransition = new sidedrawer_1.SlideInOnTopTransition();
        }
        if (platform_1.isIOS) {
            this.drawerTransition = new sidedrawer_1.PushTransition();
        }
    };
    SideDrawerPageComponent.prototype.setActionBarIcon = function (page) {
        if (platform_1.isAndroid) {
            page.actionBar.navigationButton = this.getNavigationButton();
        }
        if (platform_1.isIOS) {
            page.actionBar.actionItems.addItem(this.getNavigationButton());
        }
    };
    SideDrawerPageComponent.prototype.getNavigationButton = function () {
        var navActionItem = new action_bar_1.ActionItem();
        navActionItem.icon = 'res://ic_menu_black';
        if (navActionItem.ios) {
            navActionItem.ios.position = 'left';
        }
        navActionItem.on('tap', this.toggleDrawer.bind(this));
        return navActionItem;
    };
    SideDrawerPageComponent.prototype.toggleDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return SideDrawerPageComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], SideDrawerPageComponent.prototype, "drawerComponent", void 0);
SideDrawerPageComponent = __decorate([
    core_1.Component({
        selector: 'side-drawer-page',
        templateUrl: 'modules/shared/side-drawer-page/side-drawer-page.component.html',
        styleUrls: ['modules/shared/side-drawer-page/side-drawer-page.component.css'],
    }),
    __metadata("design:paramtypes", [router_2.RouterExtensions,
        router_1.ActivatedRoute,
        page_1.Page,
        nativescript_ng2_fonticon_1.TNSFontIconService,
        core_1.NgZone])
], SideDrawerPageComponent);
exports.SideDrawerPageComponent = SideDrawerPageComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUErQjtBQUMvQixxQ0FBNEM7QUFDNUMsNENBQTJDO0FBQzNDLHNFQUVvRDtBQUNwRCxpRUFFNEM7QUFDNUMsdUVBQStEO0FBTy9ELElBQWEsdUJBQXVCO0lBdUJsQyxpQ0FDVSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLFFBQTRCLEVBQzVCLE1BQWM7UUFKZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXpCeEI7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFPakM7O1dBRUc7UUFDSCxZQUFPLEdBQVU7WUFDZixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtTQUM1QyxDQUFDO1FBVUEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsbUJBQW1CLEVBQUUsQ0FBQztJQUM3QixDQUFDO0lBRUQsaURBQWUsR0FBZjtRQUNFLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUM7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LENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNsQyxDQUFDO0lBQ0gsOEJBQUM7QUFBRCxDQUFDLEFBeEdELElBd0dDO0FBdkdvQztJQUFsQyxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUFrQixnQ0FBc0I7Z0VBQUM7QUFEaEUsdUJBQXVCO0lBTG5DLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLFdBQVcsRUFBRSxpRUFBaUU7UUFDOUUsU0FBUyxFQUFFLENBQUMsZ0VBQWdFLENBQUM7S0FDOUUsQ0FBQztxQ0F5QjRCLHlCQUFnQjtRQUNsQix1QkFBYztRQUN4QixXQUFJO1FBQ0EsOENBQWtCO1FBQ3BCLGFBQU07R0E1QmIsdUJBQXVCLENBd0duQztBQXhHWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsIFZpZXdDaGlsZCwgQWZ0ZXJWaWV3SW5pdCwgTmdab25lLCBPbkRlc3Ryb3lcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gJ3VpL3BhZ2UnO1xuaW1wb3J0IHsgaXNBbmRyb2lkLCBpc0lPUyB9IGZyb20gJ3BsYXRmb3JtJztcbmltcG9ydCB7IEFjdGlvbkl0ZW0gfSBmcm9tICd1aS9hY3Rpb24tYmFyJztcbmltcG9ydCB7XG4gIFJhZFNpZGVEcmF3ZXJDb21wb25lbnQsIFNpZGVEcmF3ZXJUeXBlXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXIvYW5ndWxhcic7XG5pbXBvcnQge1xuICBQdXNoVHJhbnNpdGlvbiwgU2xpZGVJbk9uVG9wVHJhbnNpdGlvblxufSBmcm9tICduYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyJztcbmltcG9ydCB7IFROU0ZvbnRJY29uU2VydmljZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1uZzItZm9udGljb24nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlLWRyYXdlci1wYWdlJyxcbiAgdGVtcGxhdGVVcmw6ICdtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnbW9kdWxlcy9zaGFyZWQvc2lkZS1kcmF3ZXItcGFnZS9zaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC5jc3MnXSxcbn0pXG5leHBvcnQgY2xhc3MgU2lkZURyYXdlclBhZ2VDb21wb25lbnQgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBPbkRlc3Ryb3kge1xuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcblxuICAvKipcbiAgICogT24gdGFwIG9mIGFueSBzaWRlLWRyYXdlciBpdGVtLCBoaWRpbmcgY29udGVudCBpZiB0aGlzIGZsYWcgaXMgdHJ1ZS5cbiAgICovXG4gIGlzQ29udGVudFZpc2libGU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gIC8qKlxuICAgKiBGb3IgYW5kcm9pZCB1c2luZyBTbGlkZU9uVG9wIHRyYW5zaXRpb24gYW5kIGZvciBpT1MsIHB1c2ggdHJhbnNpdGlvbi5cbiAgICovXG4gIGRyYXdlclRyYW5zaXRpb246IGFueTtcblxuICAvKipcbiAgICogTmF2aWdhdGlvbiBNZW51IEl0ZW1zXG4gICAqL1xuICBuYXZNZW51OiBhbnlbXSA9IFtcbiAgICB7IG5hbWU6ICdIb21lJywgY29tbWFuZHM6IFsnLyddIH0sXG4gICAgeyBuYW1lOiAnQWJvdXQnLCBjb21tYW5kczogWycvYWJvdXQnXSB9LFxuICAgIHsgbmFtZTogJ0NvbnRhY3QnLCBjb21tYW5kczogWycvY29udGFjdCddIH1cbiAgXTtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2YXRlZFJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2UsXG4gICAgcHJpdmF0ZSBmb250aWNvbjogVE5TRm9udEljb25TZXJ2aWNlLFxuICAgIHByaXZhdGUgbmdab25lOiBOZ1pvbmVcbiAgKSB7XG4gICAgdGhpcy5zZXRBY3Rpb25CYXJJY29uKHRoaXMucGFnZSk7XG4gICAgdGhpcy5zZXREcmF3ZXJUcmFuc2l0aW9uKCk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgfVxuXG4gIHRvZ2dsZVNpZGVEcmF3ZXIoKSB7XG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXZpZ2F0ZXMgdG8gbmV4dCBwYWdlIGFmdGVyIGRyYXdlciBpcyBjbG9zZWQuXG4gICAqL1xuICBuYXZpZ2F0ZVRvKHJvdXRlQ29tbWFuZHM6IGFueVtdKSB7XG4gICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICBsZXQgY3VycmVudFVybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIucm91dGVyU3RhdGUuc25hcHNob3QudXJsO1xuICAgIGxldCBuZXdVcmxUcmVlID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5jcmVhdGVVcmxUcmVlKHJvdXRlQ29tbWFuZHMpO1xuICAgIGxldCBuZXdVcmwgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLnNlcmlhbGl6ZVVybChuZXdVcmxUcmVlKTtcbiAgICBpZiAoY3VycmVudFVybCAhPT0gbmV3VXJsKSB7XG4gICAgICB0aGlzLmlzQ29udGVudFZpc2libGUgPSBmYWxzZTtcblxuICAgICAgdGhpcy5kcmF3ZXIub24oJ2RyYXdlckNsb3NlZCcsICgpID0+IHtcbiAgICAgICAgdGhpcy5uZ1pvbmUucnVuKCgpID0+IHtcbiAgICAgICAgICB0aGlzLnJvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUocm91dGVDb21tYW5kcyxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAgICAgICBhbmltYXRlZDogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5kcmF3ZXIub2ZmKCdkcmF3ZXJDbG9zZWQnKTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIHNldERyYXdlclRyYW5zaXRpb24oKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgdGhpcy5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFNsaWRlSW5PblRvcFRyYW5zaXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAoaXNJT1MpIHtcbiAgICAgIHRoaXMuZHJhd2VyVHJhbnNpdGlvbiA9IG5ldyBQdXNoVHJhbnNpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0QWN0aW9uQmFySWNvbihwYWdlOiBQYWdlKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgcGFnZS5hY3Rpb25CYXIubmF2aWdhdGlvbkJ1dHRvbiA9IHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lPUykge1xuICAgICAgcGFnZS5hY3Rpb25CYXIuYWN0aW9uSXRlbXMuYWRkSXRlbSh0aGlzLmdldE5hdmlnYXRpb25CdXR0b24oKSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBnZXROYXZpZ2F0aW9uQnV0dG9uKCkge1xuICAgIGxldCBuYXZBY3Rpb25JdGVtID0gbmV3IEFjdGlvbkl0ZW0oKTtcbiAgICBuYXZBY3Rpb25JdGVtLmljb24gPSAncmVzOi8vaWNfbWVudV9ibGFjayc7XG4gICAgaWYgKG5hdkFjdGlvbkl0ZW0uaW9zKSB7XG4gICAgICBuYXZBY3Rpb25JdGVtLmlvcy5wb3NpdGlvbiA9ICdsZWZ0JztcbiAgICB9XG4gICAgbmF2QWN0aW9uSXRlbS5vbigndGFwJywgdGhpcy50b2dnbGVEcmF3ZXIuYmluZCh0aGlzKSk7XG4gICAgcmV0dXJuIG5hdkFjdGlvbkl0ZW07XG4gIH1cblxuICBwcml2YXRlIHRvZ2dsZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG59XG4iXX0=