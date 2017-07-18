"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SideNavComponent = (function () {
    function SideNavComponent() {
        this.text = 'Side-Nav';
        this.menu_items = [
            {
                caption: "BROWSE MUSIC",
                border: false,
                items: [
                    { title: "Discover", icon: "mdi-view-carousel", link: "" },
                    { title: "Feed", icon: "mdi-wifi-tethering", link: "" },
                    { title: "Genres", icon: "mdi-library-music", link: "" },
                    { title: "Top Charts", icon: "mdi-equalizer", link: "" },
                    { title: "Caliabs", icon: "mdi-group", link: "" },
                    { title: "Free Music", icon: "mdi-headset", link: "" },
                ]
            },
            {
                caption: "YOUR MUSIC",
                border: true,
                items: [
                    { title: "Favorites", icon: "mdi-favorite-border", link: "" },
                    { title: "Purchased", icon: "mdi-add-shopping-cart", link: "" },
                    { title: "Lyrics", icon: "mdi-edit", link: "" },
                    { title: "History", icon: "mdi-history", link: "" },
                ]
            },
            {
                caption: "YOUR MUSIC",
                border: true,
                items: [
                    { title: "Public Playlist", icon: "mdi-playlist-play", link: "" },
                    { title: "Purchased", icon: "mdi-music-note", link: "" },
                    { title: "My First Playlist", icon: "mdi-playlist-add", link: "" },
                ],
            },
        ];
        this.onToggleSideNav = new core_1.EventEmitter();
    }
    SideNavComponent.prototype.onTapSidebar = function () {
        this.onToggleSideNav.emit();
    };
    return SideNavComponent;
}());
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], SideNavComponent.prototype, "onToggleSideNav", void 0);
SideNavComponent = __decorate([
    core_1.Component({
        selector: 'side-nav',
        templateUrl: 'components/side-nav/side-nav.component.html',
        styleUrls: ['components/side-nav/side-nav.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], SideNavComponent);
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdHO0FBUWhHLElBQWEsZ0JBQWdCO0lBTjdCO1FBT0UsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUMxQixlQUFVLEdBQVU7WUFDbEI7Z0JBQ0UsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQ3hELEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDckQsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUN0RCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUN0RCxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUMvQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO2lCQUNyRDthQUNGO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQzNELEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDN0QsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDN0MsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztpQkFDbEQ7YUFDRjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixNQUFNLEVBQUUsSUFBSTtnQkFDWixLQUFLLEVBQUU7b0JBQ0wsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQy9ELEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDdEQsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7aUJBQ2pFO2FBQ0Y7U0FDRixDQUFDO1FBQ1Esb0JBQWUsR0FBRyxJQUFJLG1CQUFZLEVBQUUsQ0FBQTtJQUloRCxDQUFDO0lBSEMsdUNBQVksR0FBWjtRQUNFLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUNILHVCQUFDO0FBQUQsQ0FBQyxBQXZDRCxJQXVDQztBQUpXO0lBQVQsYUFBTSxFQUFFOzt5REFBcUM7QUFuQ25DLGdCQUFnQjtJQU41QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLDZDQUE2QztRQUMxRCxTQUFTLEVBQUUsQ0FBQyw0Q0FBNEMsQ0FBQztRQUN6RCxlQUFlLEVBQUUsOEJBQXVCLENBQUMsTUFBTTtLQUNoRCxDQUFDO0dBQ1csZ0JBQWdCLENBdUM1QjtBQXZDWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlciwgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnc2lkZS1uYXYnLFxuICB0ZW1wbGF0ZVVybDogJ2NvbXBvbmVudHMvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuY3NzJ10sXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoXG59KVxuZXhwb3J0IGNsYXNzIFNpZGVOYXZDb21wb25lbnQge1xuICB0ZXh0OiBzdHJpbmcgPSAnU2lkZS1OYXYnO1xuICBtZW51X2l0ZW1zOiBhbnlbXSA9IFtcbiAgICB7XG4gICAgICBjYXB0aW9uOiBcIkJST1dTRSBNVVNJQ1wiLFxuICAgICAgYm9yZGVyOiBmYWxzZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHt0aXRsZTogXCJEaXNjb3ZlclwiLCBpY29uOiBcIm1kaS12aWV3LWNhcm91c2VsXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiRmVlZFwiLCBpY29uOiBcIm1kaS13aWZpLXRldGhlcmluZ1wiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIkdlbnJlc1wiLCBpY29uOiBcIm1kaS1saWJyYXJ5LW11c2ljXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiVG9wIENoYXJ0c1wiLCBpY29uOiBcIm1kaS1lcXVhbGl6ZXJcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJDYWxpYWJzXCIsIGljb246IFwibWRpLWdyb3VwXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiRnJlZSBNdXNpY1wiLCBpY29uOiBcIm1kaS1oZWFkc2V0XCIsIGxpbms6IFwiXCJ9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2FwdGlvbjogXCJZT1VSIE1VU0lDXCIsXG4gICAgICBib3JkZXI6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGl0bGU6IFwiRmF2b3JpdGVzXCIsIGljb246IFwibWRpLWZhdm9yaXRlLWJvcmRlclwiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIlB1cmNoYXNlZFwiLCBpY29uOiBcIm1kaS1hZGQtc2hvcHBpbmctY2FydFwiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIkx5cmljc1wiLCBpY29uOiBcIm1kaS1lZGl0XCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiSGlzdG9yeVwiLCBpY29uOiBcIm1kaS1oaXN0b3J5XCIsIGxpbms6IFwiXCJ9LFxuICAgICAgXVxuICAgIH0sXG4gICAge1xuICAgICAgY2FwdGlvbjogXCJZT1VSIE1VU0lDXCIsXG4gICAgICBib3JkZXI6IHRydWUsXG4gICAgICBpdGVtczogW1xuICAgICAgICB7dGl0bGU6IFwiUHVibGljIFBsYXlsaXN0XCIsIGljb246IFwibWRpLXBsYXlsaXN0LXBsYXlcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJQdXJjaGFzZWRcIiwgaWNvbjogXCJtZGktbXVzaWMtbm90ZVwiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIk15IEZpcnN0IFBsYXlsaXN0XCIsIGljb246IFwibWRpLXBsYXlsaXN0LWFkZFwiLCBsaW5rOiBcIlwifSxcbiAgICAgIF0sXG4gICAgfSxcbiAgXTtcbiAgQE91dHB1dCgpIG9uVG9nZ2xlU2lkZU5hdiA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICBvblRhcFNpZGViYXIoKSB7XG4gICAgdGhpcy5vblRvZ2dsZVNpZGVOYXYuZW1pdCgpO1xuICB9XG59XG4iXX0=