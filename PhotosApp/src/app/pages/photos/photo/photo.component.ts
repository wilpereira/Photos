import { Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'ph-photo',
	templateUrl: './photo.component.html',
	styleUrls: ['./photo.component.scss'],
})
export class PhotoComponent implements OnInit {
	@Input() url = '';
	@Input() description = '';

	photos = [
		{
			url: 'https://images.unsplash.com/photo-1604560929658-bbc3c2ba6a36?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1973&q=80',
			name: 'Fajruddin Mudzakkir',
		},
		{
			url: 'https://images.unsplash.com/photo-1590519546504-c45f249f2b8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
			name: 'Marc Wieland',
		},
		{
			url: 'https://images.unsplash.com/photo-1530318271774-4f2cb0d1fda1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80',
			name: 'Michael Milverton',
		},
		{
			url: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1274&q=80',
			name: 'v2osk',
		},
		{
			url: 'https://images.unsplash.com/photo-1502082553048-f009c37129b9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'niko photos',
		},
		{
			url: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'Clément Hélardot',
		},
		{
			url: 'https://images.unsplash.com/photo-1537498425277-c283d32ef9db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1178&q=80',
			name: 'Tianyi Ma',
		},
		{
			url: 'https://images.unsplash.com/photo-1633114130148-3f40987134d2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'Windows',
		},
		{
			url: 'https://images.unsplash.com/photo-1624571395775-253d9666612b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'Windows',
		},
		{
			url: 'https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'ben o bro',
		},
		{
			url: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
			name: 'Andrea Cau',
		},
	];

	constructor() {}

	ngOnInit(): void {}
}
