import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appDropdown]'
})
export class DropdownDirective {
  @HostBinding('class.open') isOpened: boolean = false;

  @HostListener('click', ['$event']) onToggle() {
    this.isOpened = !this.isOpened;
  }

  constructor() { }

}
