import { Component } from '@angular/core';
import { Country } from '../../interfaces/countries';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [],
})
export class ByRegionPageComponent {
  public countries: Country[] = [];

  constructor(private countriesService: CountriesService) {}

  searchByRegionPage(region: string): void {
    this.countriesService
      .searchRegionService(region)
      .subscribe((countriesResponse) => {
        this.countries = countriesResponse;
      });
  }
}
