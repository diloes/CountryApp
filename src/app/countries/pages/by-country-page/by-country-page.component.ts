import { Component } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent {
  public countries: Country[] = [];
  public suggestedCountries: string[] = [
    'Spain',
    'Croatia',
    'Denmark',
    'France',
    'Turkey',
  ];

  constructor(private countriesService: CountriesService) {}

  searchByCountryPage(term: string): void {
    this.countriesService
      .searchCountryService(term)
      .subscribe((countriesResponse) => {
        this.countries = countriesResponse;
      });
  }

  goBack(): void {
    this.countries = [];
  }
}
