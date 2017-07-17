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
    }
    return SideNavComponent;
}());
SideNavComponent = __decorate([
    core_1.Component({
        selector: 'side-nav',
        templateUrl: 'components/side-nav/side-nav.component.html',
        styleUrls: ['components/side-nav/side-nav.component.css'],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    })
], SideNavComponent);
exports.SideNavComponent = SideNavComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2lkZS1uYXYuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic2lkZS1uYXYuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW1FO0FBUW5FLElBQWEsZ0JBQWdCO0lBTjdCO1FBT0UsU0FBSSxHQUFXLFVBQVUsQ0FBQztRQUMxQixlQUFVLEdBQVU7WUFDbEI7Z0JBQ0UsT0FBTyxFQUFFLGNBQWM7Z0JBQ3ZCLE1BQU0sRUFBRSxLQUFLO2dCQUNiLEtBQUssRUFBRTtvQkFDTCxFQUFDLEtBQUssRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQ3hELEVBQUMsS0FBSyxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsb0JBQW9CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDckQsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxtQkFBbUIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUN0RCxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUN0RCxFQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO29CQUMvQyxFQUFDLEtBQUssRUFBRSxZQUFZLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFDO2lCQUNyRDthQUNGO1lBQ0Q7Z0JBQ0UsT0FBTyxFQUFFLFlBQVk7Z0JBQ3JCLE1BQU0sRUFBRSxJQUFJO2dCQUNaLEtBQUssRUFBRTtvQkFDTCxFQUFDLEtBQUssRUFBRSxXQUFXLEVBQUUsSUFBSSxFQUFFLHFCQUFxQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQzNELEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDN0QsRUFBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDN0MsRUFBQyxLQUFLLEVBQUUsU0FBUyxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztpQkFDbEQ7YUFDRjtZQUNEO2dCQUNFLE9BQU8sRUFBRSxZQUFZO2dCQUNyQixNQUFNLEVBQUUsSUFBSTtnQkFDWixLQUFLLEVBQUU7b0JBQ0wsRUFBQyxLQUFLLEVBQUUsaUJBQWlCLEVBQUUsSUFBSSxFQUFFLG1CQUFtQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7b0JBQy9ELEVBQUMsS0FBSyxFQUFFLFdBQVcsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBQztvQkFDdEQsRUFBQyxLQUFLLEVBQUUsbUJBQW1CLEVBQUUsSUFBSSxFQUFFLGtCQUFrQixFQUFFLElBQUksRUFBRSxFQUFFLEVBQUM7aUJBQ2pFO2FBQ0Y7U0FDRixDQUFDO0lBQ0osQ0FBQztJQUFELHVCQUFDO0FBQUQsQ0FBQyxBQW5DRCxJQW1DQztBQW5DWSxnQkFBZ0I7SUFONUIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSw2Q0FBNkM7UUFDMUQsU0FBUyxFQUFFLENBQUMsNENBQTRDLENBQUM7UUFDekQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDaEQsQ0FBQztHQUNXLGdCQUFnQixDQW1DNUI7QUFuQ1ksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdzaWRlLW5hdicsXG4gIHRlbXBsYXRlVXJsOiAnY29tcG9uZW50cy9zaWRlLW5hdi9zaWRlLW5hdi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWydjb21wb25lbnRzL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5jc3MnXSxcbiAgY2hhbmdlRGV0ZWN0aW9uOiBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneS5PblB1c2hcbn0pXG5leHBvcnQgY2xhc3MgU2lkZU5hdkNvbXBvbmVudCB7XG4gIHRleHQ6IHN0cmluZyA9ICdTaWRlLU5hdic7XG4gIG1lbnVfaXRlbXM6IGFueVtdID0gW1xuICAgIHtcbiAgICAgIGNhcHRpb246IFwiQlJPV1NFIE1VU0lDXCIsXG4gICAgICBib3JkZXI6IGZhbHNlLFxuICAgICAgaXRlbXM6IFtcbiAgICAgICAge3RpdGxlOiBcIkRpc2NvdmVyXCIsIGljb246IFwibWRpLXZpZXctY2Fyb3VzZWxcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJGZWVkXCIsIGljb246IFwibWRpLXdpZmktdGV0aGVyaW5nXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiR2VucmVzXCIsIGljb246IFwibWRpLWxpYnJhcnktbXVzaWNcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJUb3AgQ2hhcnRzXCIsIGljb246IFwibWRpLWVxdWFsaXplclwiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIkNhbGlhYnNcIiwgaWNvbjogXCJtZGktZ3JvdXBcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJGcmVlIE11c2ljXCIsIGljb246IFwibWRpLWhlYWRzZXRcIiwgbGluazogXCJcIn0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXB0aW9uOiBcIllPVVIgTVVTSUNcIixcbiAgICAgIGJvcmRlcjogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHt0aXRsZTogXCJGYXZvcml0ZXNcIiwgaWNvbjogXCJtZGktZmF2b3JpdGUtYm9yZGVyXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiUHVyY2hhc2VkXCIsIGljb246IFwibWRpLWFkZC1zaG9wcGluZy1jYXJ0XCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiTHlyaWNzXCIsIGljb246IFwibWRpLWVkaXRcIiwgbGluazogXCJcIn0sXG4gICAgICAgIHt0aXRsZTogXCJIaXN0b3J5XCIsIGljb246IFwibWRpLWhpc3RvcnlcIiwgbGluazogXCJcIn0sXG4gICAgICBdXG4gICAgfSxcbiAgICB7XG4gICAgICBjYXB0aW9uOiBcIllPVVIgTVVTSUNcIixcbiAgICAgIGJvcmRlcjogdHJ1ZSxcbiAgICAgIGl0ZW1zOiBbXG4gICAgICAgIHt0aXRsZTogXCJQdWJsaWMgUGxheWxpc3RcIiwgaWNvbjogXCJtZGktcGxheWxpc3QtcGxheVwiLCBsaW5rOiBcIlwifSxcbiAgICAgICAge3RpdGxlOiBcIlB1cmNoYXNlZFwiLCBpY29uOiBcIm1kaS1tdXNpYy1ub3RlXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgICB7dGl0bGU6IFwiTXkgRmlyc3QgUGxheWxpc3RcIiwgaWNvbjogXCJtZGktcGxheWxpc3QtYWRkXCIsIGxpbms6IFwiXCJ9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuIl19