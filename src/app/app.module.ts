import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { MenubarModule } from 'primeng/menubar';
import {CardModule} from 'primeng/card';
import { FullnamePipe } from './pipes/fullname.pipe';
import { PostcardComponent } from './components/shared/postcard/postcard.component';
import { ButtonModule } from 'primeng/button';
import { TagresultComponent } from './components/tagresult/tagresult.component';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import { DialogModule } from 'primeng/dialog';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AddressPipe } from './pipes/address.pipe';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FullnamePipe,
    PostcardComponent,
    TagresultComponent,
    AddressPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    HttpClientModule,
    CardModule,
    ButtonModule,
    ProgressSpinnerModule,
    DialogModule,
    BrowserAnimationsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
