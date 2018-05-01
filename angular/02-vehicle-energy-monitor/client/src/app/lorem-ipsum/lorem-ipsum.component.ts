import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

import { LoremIpsumService } from '../lorem-ipsum.service';

@Component({
  selector: 'app-lorem-ipsum',
  template: '<div [innerHTML]="loremIpsumContent"></div>'
})
export class LoremIpsumComponent implements OnInit, OnChanges {
  @Input() public Count = 5;

  public loremIpsumContent: string;

  constructor(private lorem: LoremIpsumService) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.generate();
  }

  ngOnInit() {
    this.generate();
  }
  
  private generate() {
    this.loremIpsumContent = this.lorem.generate(this.Count);
  }
}
