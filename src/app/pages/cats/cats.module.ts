import { NgModule } from '@angular/core';
import { FeaturesModule } from '@features/features.module';
import { SharedModule } from 'src/app/shared';
import { CatsComponent } from './cats.component';
import { CatsRoutingModule } from './cats.routing';



@NgModule({
  declarations: [
    CatsComponent
  ],
  imports: [
    SharedModule,
    CatsRoutingModule,
    FeaturesModule
  ]
})
export class CatsModule { }
