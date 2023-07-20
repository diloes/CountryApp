import { Component } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'countries-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [],
})
export class ByCapitalPageComponent {
  public countries: Country[] = [];
  public isLoading: boolean = false;
  public suggestedCapitals: string[] = [
    'madrid',
    'rome',
    'lisbon',
    'berlin',
    'sucre',
    'brasilia',
    'ottawa',
  ];

  constructor(private countriesService: CountriesService) {}

  searchByCapitalPage(term: string): void {
    this.isLoading = true;

    this.countriesService
      .searchCapitalService(term)
      .subscribe((countriesResponse) => {
        this.countries = countriesResponse;
        this.isLoading = false;
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
