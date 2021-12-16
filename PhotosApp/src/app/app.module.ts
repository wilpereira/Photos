import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { PhotosModule } from './pages/photos/photos.module';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PhotosModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
