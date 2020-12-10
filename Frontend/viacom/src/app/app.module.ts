import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SidetextComponent } from './sidetext/sidetext.component';
import { SideimageComponent } from './sideimage/sideimage.component';
import { AdditemspageComponent } from './additemspage/additemspage.component';
import { ListitemspageComponent } from './listitemspage/listitemspage.component';
import { NewrowComponent } from './newrow/newrow.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidetextComponent,
    SideimageComponent,
    AdditemspageComponent,
    ListitemspageComponent,
    NewrowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
