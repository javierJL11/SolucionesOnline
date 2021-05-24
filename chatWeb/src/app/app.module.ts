import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesComponent } from './components/services/services.component';
import { from } from 'rxjs';
import { NavbarComponent } from './components/navbar/navbar.component';

import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ExploreComponent } from './components/explore/explore.component';
import { FormsModule } from '@angular/forms';
import { CreateserviceComponent } from './components/createservice/createservice.component';
import { EditserviceComponent } from './components/editservice/editservice.component';
import { ChatComponent } from './components/chat/chat.component';
import { MessageComponent } from './components/message/message.component';

const appRoutes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'services', component:ServicesComponent,pathMatch : 'full'},
  {path:'services/create', component:CreateserviceComponent},
  {path:'services/edit/:id', component:EditserviceComponent},
  {path:'explore', component:ExploreComponent},
  {path:'chats', component:ChatComponent},
  {path:'messages/:id', component:MessageComponent},
  {path:'register', component:RegisterComponent},

];
@NgModule({
  declarations: [
    AppComponent,
    ServicesComponent,
    NavbarComponent,
    LoginComponent,
    RegisterComponent,
    ExploreComponent,
    CreateserviceComponent,
    EditserviceComponent,
    ChatComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
