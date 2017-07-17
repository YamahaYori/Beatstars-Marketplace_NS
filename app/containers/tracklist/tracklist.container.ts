import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
    selector: 'tracklist',
    templateUrl: 'containers/tracklist/tracklist.container.html',
    styleUrls: ['containers/tracklist/tracklist.container.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TracklistContainer {
    text: string = 'TrackContainer';
}
