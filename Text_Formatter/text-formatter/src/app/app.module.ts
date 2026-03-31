import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { TextDisplayComponent } from './text-display/text-display.component';
import { FormattersComponent } from './formatters/formatters.component';
import { RemoveSpecialCharPipe } from './pipes/remove-special-char.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TextDisplayComponent,
    FormattersComponent,
    RemoveSpecialCharPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }