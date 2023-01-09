
import { CatDataService } from './features/cats/service/catdata.service';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatData } from 'src/app/features/cats/interfaces/cat-interface';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 

  isAllActivated?: boolean = false

  

  constructor(private service: CatDataService) { }


  ngOnInit(): void {
    // this.service.getListofBreeds().subscribe((data) => this.statesBreed = data)
    // this.getDataCat()
  }

  // getDataCat() {
  //   this.service.getCatData(this.selectedPage).subscribe((data) => {
  //     this.catList = data
  //     this.isAllActivated = true
  //   })
  // }



  // onBreedSelected() {
  //   this.service.getCatBySelectedBreed(this.selectedBreed.id, this.selectedPage).subscribe(data => {
  //     this.catList = data
  //   },(error) => {console.log(error)})


  // }



}


