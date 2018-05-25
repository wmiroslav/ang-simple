import { Directive, HostBinding, Input, OnInit, OnChanges, ElementRef } from '@angular/core';


@Directive({
  selector: '[colorize]',
})

export class ColorizeDirective implements OnChanges {

  colorConfig = {
    'loading': 'red',
    'finished': 'green'
  };
  @Input() colorize: string;
  constructor(private ref: ElementRef) {
  }

  ngOnChanges(changes) {
    if (this.colorize) {
      const color = this.colorConfig[this.colorize.toLowerCase()];
      this.ref.nativeElement.style.color = color;
    }
  }
}


