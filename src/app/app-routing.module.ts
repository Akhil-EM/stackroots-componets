import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// importing custom components
import{HeaderComponent} from './header/header.component'
import{FooterComponent} from './footer/footer.component'

const routes: Routes = [{path:'',component:FooterComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
