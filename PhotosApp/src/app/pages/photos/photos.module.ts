import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PhotosRoutingModule } from './photos.routes';
import { PhotoComponent } from './photo/photo.component';

@NgModule({
	declarations: [
		PhotoComponent
	],
	imports: [
		CommonModule,
		PhotosRoutingModule
	],
	exports: [PhotoComponent],
})
export class PhotosModule {}
