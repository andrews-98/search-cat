import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-select-bypage',
  templateUrl: './select-bypage.component.html',
  styleUrls: ['./select-bypage.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectBypageComponent implements OnInit {

  selectedPage: string = '10'
  statesPage: string[] = [
    '10',
    '20',
    '30',
    '40',
    '50'
  ]
  @Output() emitPage = new EventEmitter<string>()

  constructor() { }

  ngOnInit(): void {

  }

  onSelectedPage(item: string) {

    this.emitPage.emit(this.selectedPage)
  }
}
