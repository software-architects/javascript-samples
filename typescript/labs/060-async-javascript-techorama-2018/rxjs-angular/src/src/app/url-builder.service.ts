import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {
  public buildUrl(base: string, filter: any): string {
    const filterWithValue = Object.keys(filter)
                                .filter(f => !!filter[f])
                                .map(f => `${f}=${filter[f]}`)
                                .join('&');
    return filterWithValue ? `${base}?${filterWithValue}` : base;
  }
}