import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country.interface';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [],
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public suggestedCountries: string[] = [
    'Spain',
    'Croatia',
    'Denmark',
    'France',
    'Turkey',
  ];

  constructor(private countriesService: CountriesService) {}

  ngOnInit(): void {
    this.countries = this.countriesService.cacheStore.byCountries.countries;
    this.initialValue = this.countriesService.cacheStore.byCountries.term;
  }

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
