import { Injectable } from '@angular/core';
import * as loremIpsum from 'lorem-ipsum';

@Injectable()
export class LoremIpsumService {
  public generate(numberOfParagraphs: number) {
    return loremIpsum({
      count: numberOfParagraphs,
      units: 'paragraphs',
      sentenceLowerBound: 5,
      format: 'html'
    });
  }
}
