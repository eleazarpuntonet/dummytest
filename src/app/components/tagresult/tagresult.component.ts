import { Component, OnInit } from '@angular/core';
import { DummyserviceService } from 'src/app/services/dummyservice.service';
import { ActivatedRoute } from '@angular/router';


@Component({
	selector   : 'app-tagresult',
	templateUrl: './tagresult.component.pug',
	styleUrls  : ['./tagresult.component.sass']
})
export class TagresultComponent implements OnInit {
	postItems: any[];
	loading  : boolean;
	tag      : string;
	constructor(
		private dummyservice  : DummyserviceService,
		private activatedRoute: ActivatedRoute
	) { 
		this.loading = true
		this.activatedRoute.params.subscribe( param => this.tag = param.tag )
	}
	
	ngOnInit(): void {
		this.loadData(this.tag)
	}
	
	reloadData(tag: string){
		this.loadData(tag)

	}

	loadData(tag){
		this.loading = true
		this.dummyservice.getTagPosts(tag)
			.subscribe((items:any)=>{
				this.loading = false
				this.postItems = items.data
			})
	}
}
