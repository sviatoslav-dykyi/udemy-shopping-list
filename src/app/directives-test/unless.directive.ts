import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  @Input('appUnless') set unless(condition: boolean){
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);

      console.log('1',this.templateRef)
      console.log('2',this.vcRef)
    } else {
      this.vcRef.clear();

      console.log('3',this.templateRef)
      console.log('4',this.vcRef)
    }
  }

  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) { }  

}
