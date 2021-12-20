import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/layout/home/home.component';
import { ContantComponent } from './components/layout/contant/contant.component';
import { OurworkComponent } from './components/layout/ourwork/ourwork.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { ServicesComponent } from './components/layout/services/services.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContantComponent,
    OurworkComponent,
    NavbarComponent,
    FooterComponent,
    ServicesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
