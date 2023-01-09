import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CatData } from '@features/cats/interfaces/cat-interface';
import { CatDataService } from '@features/cats/service/catdata.service';

@Component({
  selector: 'app-select-breed',
  templateUrl: './select-breed.component.html',
  styleUrls: ['./select-breed.component.scss']
})
export class SelectBreedComponent implements OnInit {

  breedList: CatData[] = []
  selectedBreed: string = 'All'
  @Output() emitBreed = new EventEmitter<string>();


  constructor(private service: CatDataService) { }

  ngOnInit(): void {
    this.service.getListofBreeds().subscribe( data => {
      this.breedList = data
    })
  }

  onSelectedBreed(id: string){
    this.emitBreed.emit(id)
  }
}
