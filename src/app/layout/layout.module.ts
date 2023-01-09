import { NgModule } from '@angular/core';
import { MainComponent } from './containers/main/main.component';
import { HeaderComponent } from './components/header/header.component';
import { SharedModule } from '../shared';



@NgModule({
  declarations: [
    MainComponent,
    HeaderComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [ 
    MainComponent,
    HeaderComponent
  ]
})
export class LayoutModule { }
