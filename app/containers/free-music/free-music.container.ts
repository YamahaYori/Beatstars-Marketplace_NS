import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'free-music',
    templateUrl: 'containers/free-music/free-music.container.html',
    styleUrls: ['containers/free-music/free-music.container.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FreeMusicContainerComponent {
    text: string = 'Track123';
    singleTrack = { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'};
    AudioTrackList: any[] = [
    { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'},
    { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+'},
    { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+'},
    { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+'},
    { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+'},
    { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'},
    { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+'},
    { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+'},
    { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+'},
    { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+'},
    { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'},
    { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+'},
    { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+'},
    { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+'},
    { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+'},
    { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'},
    { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+'},
    { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+'},
    { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+'},
    { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+'},
    { name: 'yuck foo', musician: 'KnightMare - AudioPioneerEntertainment', price: '$20.00+'},
    { name: 'Her Vision', musician: 'StunnahSezbeatz', price: '$20.00+'},
    { name: "DJ Mustard Type Beat With Hook | Somebody's Girl", musician: 'Hooks R Us', price: '$20.00+'},
    { name: 'Revivie', musician: 'Horus Beats', price: '$20.00+'},
    { name: 'Traffic', musician: 'Taz Taylor', price: '$20.00+'},
  ];
}
