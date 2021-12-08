import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = 'https://api.unsplash.com/photos/?client_id=iiXAlPEgtIfUfEPH-SGXJaC_BveGhTTY64HrQCcSM7U'

@Injectable({
	providedIn: 'root',
})
export class PhotoService {
	constructor(private http: HttpClient) {}

	listFromUser(userName: string) {
		return this.http.get<Object[]>(API);
	}
}
