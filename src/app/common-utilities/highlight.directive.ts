import { Directive, ElementRef, Input, Renderer2, SimpleChange } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {
  @Input() canHighlight: boolean = true;
  @Input() text: string = "";

  constructor(private el: ElementRef, private render: Renderer2) { }

  ngOnChanges(changes: SimpleChange): void {
    if(!this.canHighlight){
      this.render.setProperty(this.el.nativeElement, 'innerHtml', this.text);
      return;
    }
    this.render.setProperty(this.el.nativeElement, 'innerHtml', this.getFormattedText());
  }

  getFormattedText(): any{
    return `<span class="selected">${this.text}</span>`;
  }
}
