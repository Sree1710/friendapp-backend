import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddfriendComponent } from './addfriend/addfriend.component';
import { ViewfriendComponent } from './viewfriend/viewfriend.component';

const routes: Routes = [{path:"",component:ViewfriendComponent},{path:"",component:AddfriendComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
