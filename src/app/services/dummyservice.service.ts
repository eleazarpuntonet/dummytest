import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root'
})
export class DummyserviceService {
	appId: string;
	headers : HttpHeaders;
	
	constructor(
		private http: HttpClient) { 
		this.appId = '5f59e862f4d3050c5f331454';
		this.headers = new HttpHeaders({
			'app-id': this.appId
		})
	}
	
	apiCall(query:string){
		const url = `https://dummyapi.io/data/api${query}`;
		return this.http.get(url,{ headers : this.headers });
	}

	getPosts(){
		return this.apiCall('/post');
	}

	getTagPosts(tag:string){
		return this.apiCall(`/tag/${tag}/post`);
	}

	getUserDetails(id: string){
		return this.apiCall(`/user/${id}`);
	}

	getPostDetails(id: string){
		return this.apiCall(`/post/${id}`);
	}

	getPostComments(id: string){
		return this.apiCall(`/post/${id}/comment`);
	}
}
	