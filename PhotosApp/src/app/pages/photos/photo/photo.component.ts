import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ph-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.scss']
})
export class PhotoComponent implements OnInit {
	@Input() url = '';
	@Input() description = '';

  constructor() { }

  ngOnInit(): void {
  }

}
