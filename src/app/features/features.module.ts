import { NgModule } from '@angular/core';
import { SelectBreedComponent } from './cats/components/select-breed/select-breed.component';
import { SelectBypageComponent } from './cats/components/select-bypage/select-bypage.component';
import { ImgListComponent } from './cats/components/img-list/img-list.component';
import { SharedModule } from '@shared';



@NgModule({
  declarations: [
    SelectBreedComponent,
    SelectBypageComponent,
    ImgListComponent
  ],
  imports: [
    SharedModule
  ],
  exports: [
    SelectBreedComponent,
    SelectBypageComponent,
    ImgListComponent
  ]
})
export class FeaturesModule { }
