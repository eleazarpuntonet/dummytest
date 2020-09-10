import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { TagresultComponent } from './components/tagresult/tagresult.component';

const routes: Routes = [
	{
		path: '',
		component: HomeComponent        
	},
	{
		path: 'tag/:tag',
		component: TagresultComponent        
	},
	{
		path: '**',
		pathMatch: 'full',
		redirectTo: ''        
	},
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
