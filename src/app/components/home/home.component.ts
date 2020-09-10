import { Component, OnInit } from '@angular/core';
import { DummyserviceService } from 'src/app/services/dummyservice.service'


@Component({
	selector: 'app-home',
	templateUrl: './home.component.pug',
	styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
	postItems: any[];
	loading: boolean;
	
	constructor(
		private dummyservice: DummyserviceService
	) {
		this.loading = true
	 }
	
	ngOnInit(): void {
		this.dummyservice.getPosts()
			.subscribe((items:any)=>{
				this.loading = false
				this.postItems = items.data
			})
	}
	
}
