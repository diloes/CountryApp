import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-suggested-capital',
  templateUrl: './suggested-capital.component.html',
  styleUrls: ['./suggested-capital.component.css'],
})
export class SuggestedCapitalComponent {
  @Input()
  public capital!: string;
}
