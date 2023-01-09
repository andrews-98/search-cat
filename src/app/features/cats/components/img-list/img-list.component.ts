import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { CatData } from '@features/cats/interfaces/cat-interface';

@Component({
  selector: 'app-img-list',
  templateUrl: './img-list.component.html',
  styleUrls: ['./img-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ImgListComponent implements OnInit {
  @Input() imgList!: CatData[]

  constructor() { }


  ngOnInit(): void {
  }

}
