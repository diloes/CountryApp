import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/countries';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: [],
})
export class CountryPageComponent implements OnInit {
  public country?: Country;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private countriesService: CountriesService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) =>
          this.countriesService.searchCountryByAlphaCode(id)
        )
      )
      .subscribe((country) => {
        if (!country) return this.router.navigateByUrl('');

        return (this.country = country);
      });
  }
}

/**
 * NOTAS:
 * - Para leer parametros que tenemos en la URL usamos el service de Angular Router ActivatedRoute en su función params
 * que es un Observable y al cual nos suscribimos.
 * - this.activatedRoute.params.subscribe(({ id }) => {
      console.log({params: id});
    }); -> Esto es lo mismo que:

    this.activatedRoute.params.subscribe((params) => {
      console.log(params['id']);
    });
 */
