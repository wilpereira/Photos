import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PhotoComponent } from './photo/photo.component';

const photosRoutes: Routes = [
	{ path: '', component: PhotoComponent }
];

@NgModule({
	imports: [
		RouterModule.forChild(photosRoutes)
	],
	exports: [
		RouterModule
	],
})
export class PhotosRoutingModule {}
