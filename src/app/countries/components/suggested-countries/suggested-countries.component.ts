import { Component, Input } from '@angular/core';

@Component({
  selector: 'countries-suggested-countries',
  templateUrl: './suggested-countries.component.html',
  styleUrls: ['suggested-countries.component.css'],
})
export class SuggestedCountriesComponent {
  @Input()
  public country!: string;
}
