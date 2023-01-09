
import { CatDataService } from './features/cats/service/catdata.service';
import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {


  constructor(private service: CatDataService) { }

  ngOnInit(): void {

  }

}


