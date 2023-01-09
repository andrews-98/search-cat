import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CatData } from '@features/cats/interfaces/cat-interface';
import { CatDataService } from '@features/cats/service/catdata.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CatsComponent implements OnInit {
  imgList!: CatData[] | null
  selectedBreed: string = 'All'
  selectedPage: string = '10'

  constructor(private service: CatDataService) { }

  ngOnInit(): void {
    this.getAllCats()
  }

  getSelectedBreed(id: string) {
    this.selectedBreed = id
    this.imgList = null

    if (id === 'All') {
      this.getAllCats()
    } else {
      this.service.getCatBySelectedBreed(this.selectedBreed, this.selectedPage).subscribe(data => {
        this.imgList = data

      })
    }
  }

  getSelectedPage(item: string) {
    this.selectedPage = item
    this.imgList = null
    if (this.selectedBreed === 'All') {
      this.getAllCats()
    } else {
      this.getSelectedBreed(this.selectedBreed)
    }
  }

  getAllCats() {
    this.imgList = null
    this.service.getAllCats(this.selectedPage).subscribe(data => {
      this.imgList = data
    })
  }
}
