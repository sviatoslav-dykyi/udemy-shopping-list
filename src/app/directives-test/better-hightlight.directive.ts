import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHightlight]'
})
export class BetterHightlightDirective implements OnInit {
  @Input() defaultColor: string = '#777';
  @Input('appBetterHightlight') hightlightColor: string = 'red';

  @HostBinding('style.backgroundColor') backgroundColor!: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    this.backgroundColor = this.defaultColor;
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#0000ff47');
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'red');
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color', '#0000ff47');    
    this.backgroundColor = this.defaultColor;
  }

}
