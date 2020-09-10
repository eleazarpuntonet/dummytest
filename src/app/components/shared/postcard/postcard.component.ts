import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { DummyserviceService } from 'src/app/services/dummyservice.service';




@Component({
	selector   : 'app-postcard',
	templateUrl: './postcard.component.pug',
	styleUrls  : ['./postcard.component.sass']
})
export class PostcardComponent implements OnInit {
	@Input() post   : any;
	@Output() reload: EventEmitter<string>;
	dialogUser      : boolean;
	userDetails     : object;
	postApiCall     : boolean;
	dialogComments  : boolean;
	comments        : any[];
	
	constructor(
		private router: Router,
		private dummyservice: DummyserviceService
	) 
	{
		this.reload         = new EventEmitter();
		this.dialogUser     = false;
		this.postApiCall    = false
		this.dialogComments = false
	}
		
	ngOnInit(): void {
	}
	
	gotoTag(tag:string){
		
		let route = this.router.url
		let tagstring = tag.split(" ").join("")
		
		if(route.split('/')[1] === "tag"){
			this.reload.emit(tagstring);
		} else {
			this.router.navigate(['/tag',tagstring])
		}
	}

	userInfo(userId: string){
		this.postApiCall = true
		this.dummyservice.getUserDetails(userId)
			.subscribe((user:any)=>{
				this.postApiCall = false
				this.userDetails = user
				this.dialogUser  = true
			})
	}

	getPostDetail(postId: string){
		this.postApiCall = true
		this.dummyservice.getPostDetails(postId)
			.subscribe((post:any)=>{
				this.postApiCall = false
			})
	}

	getPostComments(postId: string){
		this.postApiCall = true
		this.dummyservice.getPostComments(postId)
			.subscribe((comments:any)=>{
				this.postApiCall    = false
				this.comments       = comments.data
				this.dialogComments = true
			})
	}
}
	