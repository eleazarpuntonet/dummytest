import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';


@Component({
	selector: 'app-navbar',
	templateUrl: './navbar.component.pug',
	styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {
	navItems: MenuItem[];
	constructor() { }
	
	ngOnInit(): void {
		this.navItems = [
			{
				label: 'Home', 
				icon: 'pi pi-fw pi-home',
				routerLink: [''],
			},
		]
	}
	
}
