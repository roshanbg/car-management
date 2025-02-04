import { Directive, ElementRef, HostListener, inject } from '@angular/core';

@Directive({
  selector: '[appAlphabetOnly]',
  standalone: true,
})
export class AlphabetOnlyDirective {
  @HostListener('input', ['$event'])
  onInputChange(event: any) {
    const filteredValue = event.target.value.replace(/[^a-zA-Z\s]/g, '');
    if (event.target.value !== filteredValue) {
      event.target.value = filteredValue;
      event.stopPropagation();
    }
  }
}
