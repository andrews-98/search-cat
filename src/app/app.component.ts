
import { CatDataService } from './service/catdata.service';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { CatData } from 'src/app/interfaces';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  catList?: CatData[]
  statesBreed?: any[] = []
  selectedBreed: any = 'All'
  isAllActivated?: boolean = false

  selectedPage: string = '10'
  statesPage: string[] = [
    '10',
    '20',
    '30',
    '40',
    '50'
  ]

  constructor(private service: CatDataService) { }


  ngOnInit(): void {
    this.service.getListofBreeds().subscribe((data) => this.statesBreed = data)
    this.getDataCat()
  }

  getDataCat() {
    this.service.getCatData(this.selectedPage).subscribe((data) => {
      this.catList = data
      this.isAllActivated = true
    })
  }



  onBreedSelected() {
    this.service.getCatBySelectedBreed(this.selectedBreed.id, this.selectedPage).subscribe(data => {
      this.catList = data
    },(error) => {console.log(error)})


  }



}


