import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';
import { PhotosModule } from './pages/photos/photos.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		PhotosModule,
		HttpClientModule
	],
	providers: [],
	bootstrap: [AppComponent],
})
export class AppModule {}
