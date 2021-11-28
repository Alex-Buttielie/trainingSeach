import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-custom-header',
  templateUrl: './custom-header.component.html',
  styleUrls: ['./custom-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomHeaderComponent implements OnInit {

  logo;

  @Input() dadosEmpresa: any;
  @Input() titulo: any;
  @Input() cor: any;

  constructor() {

    if (environment.production) {
      this.logo = '/pdportal/assets/globo_prodata.png';
    } else {
      this.logo = '../../../assets/globo_prodata.png';
    }
  }

  ngOnInit(): void {
  }

}
