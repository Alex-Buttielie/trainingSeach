import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'app-custom-separator',
  templateUrl: './custom-separator.component.html',
  styleUrls: ['./custom-separator.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomSeparatorComponent implements OnInit {

  @Input() titulo: any;
  @Input() subtitulo: any;

  constructor() { }

  ngOnInit(): void {
  }

}
