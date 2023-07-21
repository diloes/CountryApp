import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [],
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  private debouncer: Subject<string> = new Subject<string>();
  private debouncerSuscription?: Subscription;

  @Input()
  public placeholder: string = '';

  @Input()
  public initialValue: string = '';

  // Sirve para tomar una referencia local
  @ViewChild('txtInput')
  public txtInput!: ElementRef<HTMLInputElement>;

  @Output()
  public onValue = new EventEmitter<string>();

  @Output()
  public onDebounce = new EventEmitter<string>();

  ngOnInit(): void {
    this.debouncerSuscription = this.debouncer
      .pipe(debounceTime(300))
      .subscribe((value) => {
        this.onDebounce.emit(value);
      });
  }

  ngOnDestroy(): void {
    this.debouncerSuscription?.unsubscribe();
  }

  emitValue(value: string) {
    this.onValue.emit(value);
    this.txtInput.nativeElement.value = '';
  }

  onKeyPress(searchTerm: string) {
    this.debouncer.next(searchTerm);
  }
}

/**
 * NOTAS:
 * - debounceTime(1000) -> el debouncer actua cuando pasa 1seg de haber ejecutado el evento
 *
 */
