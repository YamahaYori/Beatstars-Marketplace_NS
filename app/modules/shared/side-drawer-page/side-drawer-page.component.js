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
        this.AudioTrackList = [
            { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+' },
            { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+' },
            { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+' },
            { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+' },
            { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+' },
            { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+' },
            { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+' },
            { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+' },
            { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+' },
            { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+' },
            { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+' },
            { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+' },
            { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+' },
            { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+' },
            { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+' },
            { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+' },
            { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+' },
            { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+' },
            { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+' },
            { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+' },
            { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+' },
            { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+' },
            { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+' },
            { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+' },
            { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+' },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzaWRlLWRyYXdlci1wYWdlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUV1QjtBQUN2QiwwQ0FBaUQ7QUFDakQsc0RBQStEO0FBRS9ELGdDQUErQjtBQUMvQixxQ0FBNEM7QUFDNUMsNENBQTJDO0FBQzNDLHNFQUVvRDtBQUNwRCxpRUFFNEM7QUFDNUMsdUVBQStEO0FBTy9ELElBQWEsdUJBQXVCO0lBa0RsQyxpQ0FDVSxnQkFBa0MsRUFDbEMsY0FBOEIsRUFDOUIsSUFBVSxFQUNWLFFBQTRCLEVBQzVCLE1BQWM7UUFKZCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBQ2xDLG1CQUFjLEdBQWQsY0FBYyxDQUFnQjtRQUM5QixTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsYUFBUSxHQUFSLFFBQVEsQ0FBb0I7UUFDNUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQXBEeEI7O1dBRUc7UUFDSCxxQkFBZ0IsR0FBWSxJQUFJLENBQUM7UUFPakM7O1dBRUc7UUFDSCxZQUFPLEdBQVU7WUFDZixFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsUUFBUSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDakMsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFFBQVEsRUFBRSxDQUFDLFFBQVEsQ0FBQyxFQUFFO1lBQ3ZDLEVBQUUsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsQ0FBQyxVQUFVLENBQUMsRUFBRTtTQUM1QyxDQUFDO1FBQ0YsbUJBQWMsR0FBVTtZQUN0QixFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLHdDQUF3QyxFQUFFLEtBQUssRUFBRSxTQUFTLEVBQUM7WUFDekYsRUFBRSxJQUFJLEVBQUUsWUFBWSxFQUFFLFFBQVEsRUFBRSxpQkFBaUIsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFDO1lBQ3BF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LDhDQUFZLEdBQXBCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFDSCw4QkFBQztBQUFELENBQUMsQUFuSUQsSUFtSUM7QUFsSW9DO0lBQWxDLGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQWtCLGdDQUFzQjtnRUFBQztBQURoRSx1QkFBdUI7SUFMbkMsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQkFBa0I7UUFDNUIsV0FBVyxFQUFFLGlFQUFpRTtRQUM5RSxTQUFTLEVBQUUsQ0FBQyxnRUFBZ0UsQ0FBQztLQUM5RSxDQUFDO3FDQW9ENEIseUJBQWdCO1FBQ2xCLHVCQUFjO1FBQ3hCLFdBQUk7UUFDQSw4Q0FBa0I7UUFDcEIsYUFBTTtHQXZEYix1QkFBdUIsQ0FtSW5DO0FBbklZLDBEQUF1QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCwgVmlld0NoaWxkLCBBZnRlclZpZXdJbml0LCBOZ1pvbmUsIE9uRGVzdHJveVxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSAncGxhdGZvcm0nO1xuaW1wb3J0IHsgQWN0aW9uSXRlbSB9IGZyb20gJ3VpL2FjdGlvbi1iYXInO1xuaW1wb3J0IHtcbiAgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGVcbn0gZnJvbSAnbmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyJztcbmltcG9ydCB7XG4gIFB1c2hUcmFuc2l0aW9uLCBTbGlkZUluT25Ub3BUcmFuc2l0aW9uXG59IGZyb20gJ25hdGl2ZXNjcmlwdC10ZWxlcmlrLXVpL3NpZGVkcmF3ZXInO1xuaW1wb3J0IHsgVE5TRm9udEljb25TZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LW5nMi1mb250aWNvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ3NpZGUtZHJhd2VyLXBhZ2UnLFxuICB0ZW1wbGF0ZVVybDogJ21vZHVsZXMvc2hhcmVkL3NpZGUtZHJhd2VyLXBhZ2Uvc2lkZS1kcmF3ZXItcGFnZS5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydtb2R1bGVzL3NoYXJlZC9zaWRlLWRyYXdlci1wYWdlL3NpZGUtZHJhd2VyLXBhZ2UuY29tcG9uZW50LmNzcyddLFxufSlcbmV4cG9ydCBjbGFzcyBTaWRlRHJhd2VyUGFnZUNvbXBvbmVudCBpbXBsZW1lbnRzIEFmdGVyVmlld0luaXQsIE9uRGVzdHJveSB7XG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgZHJhd2VyQ29tcG9uZW50OiBSYWRTaWRlRHJhd2VyQ29tcG9uZW50O1xuXG4gIC8qKlxuICAgKiBPbiB0YXAgb2YgYW55IHNpZGUtZHJhd2VyIGl0ZW0sIGhpZGluZyBjb250ZW50IGlmIHRoaXMgZmxhZyBpcyB0cnVlLlxuICAgKi9cbiAgaXNDb250ZW50VmlzaWJsZTogYm9vbGVhbiA9IHRydWU7XG5cbiAgLyoqXG4gICAqIEZvciBhbmRyb2lkIHVzaW5nIFNsaWRlT25Ub3AgdHJhbnNpdGlvbiBhbmQgZm9yIGlPUywgcHVzaCB0cmFuc2l0aW9uLlxuICAgKi9cbiAgZHJhd2VyVHJhbnNpdGlvbjogYW55O1xuXG4gIC8qKlxuICAgKiBOYXZpZ2F0aW9uIE1lbnUgSXRlbXNcbiAgICovXG4gIG5hdk1lbnU6IGFueVtdID0gW1xuICAgIHsgbmFtZTogJ0hvbWUnLCBjb21tYW5kczogWycvJ10gfSxcbiAgICB7IG5hbWU6ICdBYm91dCcsIGNvbW1hbmRzOiBbJy9hYm91dCddIH0sXG4gICAgeyBuYW1lOiAnQ29udGFjdCcsIGNvbW1hbmRzOiBbJy9jb250YWN0J10gfVxuICBdO1xuICBBdWRpb1RyYWNrTGlzdDogYW55W10gPSBbXG4gICAgeyBuYW1lOiAneXVjayBmb28nLCBtdXNpY2lhbjogJ0tuaWdodE1hcmUgLSBBdWRpb1Bpb25lZXJFbnRlcnRhaW5tZW50JywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAnSGVyIFZpc2lvbicsIG11c2ljaWFuOiAnU3R1bm5haFNlemJlYXR6JywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiBcIkRKIE11c3RhcmQgVHlwZSBCZWF0IFdpdGggSG9vayB8IFNvbWVib2R5J3MgR2lybFwiLCBtdXNpY2lhbjogJ0hvb2tzIFIgVXMnLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICdSZXZpdmllJywgbXVzaWNpYW46ICdIb3J1cyBCZWF0cycsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ1RyYWZmaWMnLCBtdXNpY2lhbjogJ1RheiBUYXlsb3InLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICd5dWNrIGZvbycsIG11c2ljaWFuOiAnS25pZ2h0TWFyZSAtIEF1ZGlvUGlvbmVlckVudGVydGFpbm1lbnQnLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICdIZXIgVmlzaW9uJywgbXVzaWNpYW46ICdTdHVubmFoU2V6YmVhdHonLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6IFwiREogTXVzdGFyZCBUeXBlIEJlYXQgV2l0aCBIb29rIHwgU29tZWJvZHkncyBHaXJsXCIsIG11c2ljaWFuOiAnSG9va3MgUiBVcycsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ1Jldml2aWUnLCBtdXNpY2lhbjogJ0hvcnVzIEJlYXRzJywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAnVHJhZmZpYycsIG11c2ljaWFuOiAnVGF6IFRheWxvcicsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ3l1Y2sgZm9vJywgbXVzaWNpYW46ICdLbmlnaHRNYXJlIC0gQXVkaW9QaW9uZWVyRW50ZXJ0YWlubWVudCcsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ0hlciBWaXNpb24nLCBtdXNpY2lhbjogJ1N0dW5uYWhTZXpiZWF0eicsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogXCJESiBNdXN0YXJkIFR5cGUgQmVhdCBXaXRoIEhvb2sgfCBTb21lYm9keSdzIEdpcmxcIiwgbXVzaWNpYW46ICdIb29rcyBSIFVzJywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAnUmV2aXZpZScsIG11c2ljaWFuOiAnSG9ydXMgQmVhdHMnLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICdUcmFmZmljJywgbXVzaWNpYW46ICdUYXogVGF5bG9yJywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAneXVjayBmb28nLCBtdXNpY2lhbjogJ0tuaWdodE1hcmUgLSBBdWRpb1Bpb25lZXJFbnRlcnRhaW5tZW50JywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAnSGVyIFZpc2lvbicsIG11c2ljaWFuOiAnU3R1bm5haFNlemJlYXR6JywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiBcIkRKIE11c3RhcmQgVHlwZSBCZWF0IFdpdGggSG9vayB8IFNvbWVib2R5J3MgR2lybFwiLCBtdXNpY2lhbjogJ0hvb2tzIFIgVXMnLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICdSZXZpdmllJywgbXVzaWNpYW46ICdIb3J1cyBCZWF0cycsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ1RyYWZmaWMnLCBtdXNpY2lhbjogJ1RheiBUYXlsb3InLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICd5dWNrIGZvbycsIG11c2ljaWFuOiAnS25pZ2h0TWFyZSAtIEF1ZGlvUGlvbmVlckVudGVydGFpbm1lbnQnLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6ICdIZXIgVmlzaW9uJywgbXVzaWNpYW46ICdTdHVubmFoU2V6YmVhdHonLCBwcmljZTogJyQyMC4wMCsnfSxcbiAgICB7IG5hbWU6IFwiREogTXVzdGFyZCBUeXBlIEJlYXQgV2l0aCBIb29rIHwgU29tZWJvZHkncyBHaXJsXCIsIG11c2ljaWFuOiAnSG9va3MgUiBVcycsIHByaWNlOiAnJDIwLjAwKyd9LFxuICAgIHsgbmFtZTogJ1Jldml2aWUnLCBtdXNpY2lhbjogJ0hvcnVzIEJlYXRzJywgcHJpY2U6ICckMjAuMDArJ30sXG4gICAgeyBuYW1lOiAnVHJhZmZpYycsIG11c2ljaWFuOiAnVGF6IFRheWxvcicsIHByaWNlOiAnJDIwLjAwKyd9LFxuICBdO1xuICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXJFeHRlbnNpb25zOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgYWN0aXZhdGVkUm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIGZvbnRpY29uOiBUTlNGb250SWNvblNlcnZpY2UsXG4gICAgcHJpdmF0ZSBuZ1pvbmU6IE5nWm9uZVxuICApIHtcbiAgICB0aGlzLnNldEFjdGlvbkJhckljb24odGhpcy5wYWdlKTtcbiAgICB0aGlzLnNldERyYXdlclRyYW5zaXRpb24oKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICB9XG5cbiAgdG9nZ2xlU2lkZURyYXdlcigpIHtcbiAgICB0aGlzLmRyYXdlci50b2dnbGVEcmF3ZXJTdGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5hdmlnYXRlcyB0byBuZXh0IHBhZ2UgYWZ0ZXIgZHJhd2VyIGlzIGNsb3NlZC5cbiAgICovXG4gIG5hdmlnYXRlVG8ocm91dGVDb21tYW5kczogYW55W10pIHtcbiAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgIGxldCBjdXJyZW50VXJsID0gdGhpcy5yb3V0ZXJFeHRlbnNpb25zLnJvdXRlci5yb3V0ZXJTdGF0ZS5zbmFwc2hvdC51cmw7XG4gICAgbGV0IG5ld1VybFRyZWUgPSB0aGlzLnJvdXRlckV4dGVuc2lvbnMucm91dGVyLmNyZWF0ZVVybFRyZWUocm91dGVDb21tYW5kcyk7XG4gICAgbGV0IG5ld1VybCA9IHRoaXMucm91dGVyRXh0ZW5zaW9ucy5yb3V0ZXIuc2VyaWFsaXplVXJsKG5ld1VybFRyZWUpO1xuICAgIGlmIChjdXJyZW50VXJsICE9PSBuZXdVcmwpIHtcbiAgICAgIHRoaXMuaXNDb250ZW50VmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICB0aGlzLmRyYXdlci5vbignZHJhd2VyQ2xvc2VkJywgKCkgPT4ge1xuICAgICAgICB0aGlzLm5nWm9uZS5ydW4oKCkgPT4ge1xuICAgICAgICAgIHRoaXMucm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShyb3V0ZUNvbW1hbmRzLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgIGFuaW1hdGVkOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5pc0NvbnRlbnRWaXNpYmxlID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLmRyYXdlci5vZmYoJ2RyYXdlckNsb3NlZCcpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0RHJhd2VyVHJhbnNpdGlvbigpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICB0aGlzLmRyYXdlclRyYW5zaXRpb24gPSBuZXcgU2xpZGVJbk9uVG9wVHJhbnNpdGlvbigpO1xuICAgIH1cblxuICAgIGlmIChpc0lPUykge1xuICAgICAgdGhpcy5kcmF3ZXJUcmFuc2l0aW9uID0gbmV3IFB1c2hUcmFuc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBzZXRBY3Rpb25CYXJJY29uKHBhZ2U6IFBhZ2UpIHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5uYXZpZ2F0aW9uQnV0dG9uID0gdGhpcy5nZXROYXZpZ2F0aW9uQnV0dG9uKCk7XG4gICAgfVxuXG4gICAgaWYgKGlzSU9TKSB7XG4gICAgICBwYWdlLmFjdGlvbkJhci5hY3Rpb25JdGVtcy5hZGRJdGVtKHRoaXMuZ2V0TmF2aWdhdGlvbkJ1dHRvbigpKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldE5hdmlnYXRpb25CdXR0b24oKSB7XG4gICAgbGV0IG5hdkFjdGlvbkl0ZW0gPSBuZXcgQWN0aW9uSXRlbSgpO1xuICAgIG5hdkFjdGlvbkl0ZW0uaWNvbiA9ICdyZXM6Ly9pY19tZW51X2JsYWNrJztcbiAgICBpZiAobmF2QWN0aW9uSXRlbS5pb3MpIHtcbiAgICAgIG5hdkFjdGlvbkl0ZW0uaW9zLnBvc2l0aW9uID0gJ2xlZnQnO1xuICAgIH1cbiAgICBuYXZBY3Rpb25JdGVtLm9uKCd0YXAnLCB0aGlzLnRvZ2dsZURyYXdlci5iaW5kKHRoaXMpKTtcbiAgICByZXR1cm4gbmF2QWN0aW9uSXRlbTtcbiAgfVxuXG4gIHByaXZhdGUgdG9nZ2xlRHJhd2VyKCkge1xuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH1cbn1cbiJdfQ==