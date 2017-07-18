import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'side-nav',
  templateUrl: 'components/side-nav/side-nav.component.html',
  styleUrls: ['components/side-nav/side-nav.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SideNavComponent {
  text: string = 'Side-Nav';
  menu_items: any[] = [
    {
      caption: "BROWSE MUSIC",
      border: false,
      items: [
        {title: "Discover", icon: "mdi-view-carousel", link: ""},
        {title: "Feed", icon: "mdi-wifi-tethering", link: ""},
        {title: "Genres", icon: "mdi-library-music", link: ""},
        {title: "Top Charts", icon: "mdi-equalizer", link: ""},
        {title: "Caliabs", icon: "mdi-group", link: ""},
        {title: "Free Music", icon: "mdi-headset", link: ""},
      ]
    },
    {
      caption: "YOUR MUSIC",
      border: true,
      items: [
        {title: "Favorites", icon: "mdi-favorite-border", link: ""},
        {title: "Purchased", icon: "mdi-add-shopping-cart", link: ""},
        {title: "Lyrics", icon: "mdi-edit", link: ""},
        {title: "History", icon: "mdi-history", link: ""},
      ]
    },
    {
      caption: "YOUR MUSIC",
      border: true,
      items: [
        {title: "Public Playlist", icon: "mdi-playlist-play", link: ""},
        {title: "Purchased", icon: "mdi-music-note", link: ""},
        {title: "My First Playlist", icon: "mdi-playlist-add", link: ""},
      ],
    },
  ];
  @Output() onToggleSideNav = new EventEmitter()
  onTapSidebar() {
    this.onToggleSideNav.emit();
  }
}
