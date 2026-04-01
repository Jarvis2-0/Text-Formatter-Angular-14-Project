import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FormattersComponent } from './formatters/formatters.component';
import { RemoveSpecialCharPipe } from './pipes/remove-special-char.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { ApisComponent } from './apis/apis.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormattersComponent,
    RemoveSpecialCharPipe,
    NavbarComponent,
    ApisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }