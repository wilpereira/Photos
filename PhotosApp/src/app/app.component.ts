
import { Component } from '@angular/core';
import { PhotoService } from './pages/photos/service/photo.service';

@Component({
	selector: 'ph-root',
	templateUrl: './app.component.html',
})
export class AppComponent {
	photos: Object[] = [];

	constructor(private photoService: PhotoService) {
		photoService.listFromUser('').subscribe(photos => {
			console.log(photos);
			this.photos = photos
		});
	}
}
