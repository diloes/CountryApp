import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  public suggestedCapitals: string[] = [
    'madrid',
    'rome',
    'lisbon',
    'berlin',
    'sucre',
    'brasilia',
    'ottawa',
    'lagos',
  ];

  constructor(private countriesService: CountriesService) {}

  searchByCapitalPage(term: string): void {
    this.countriesService
      .searchCapitalService(term)
      .subscribe((countriesResponse) => {
        this.countries = countriesResponse;
      });
  }

  goBack(): void {
    this.countries = [];
  }
}

/**
 * NOTAS:
 * - Nos subscribimos al observable desde el componente hijo, no lo hacemos directamente en el observable.
 * - La data que nos llega a la subscripción, en este caso la llamamos: countriesResponse la guardamos en la
 * propiedad countries.
 */
