import { UrlBuilderService } from "./url-builder.service";

export function urlBuilderServiceFactory(i: any) {
  return i.get('UrlBuilderService');
}

export const UrlBuilderServiceProvider = {
  provide: UrlBuilderService,
  useFactory: urlBuilderServiceFactory,
  deps: ['$injector']
};
