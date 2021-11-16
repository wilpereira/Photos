import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
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
