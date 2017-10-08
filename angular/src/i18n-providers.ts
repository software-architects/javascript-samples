import { TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy } from '@angular/core';
import { CompilerConfig } from '@angular/compiler';

// Read more about translation providers at https://angular.io/guide/i18n#create-translation-providers

// Note that for demo purposes we add the XLF as a string here. This is not recommended for
// real-world project. Load XLF using System.js at runtime or use Angular AOT.
// Read more at https://github.com/angular/angular-cli/wiki/stories-internationalization

const deXlf = `
<?xml version="1.0" encoding="UTF-8" ?>
<xliff version="1.2" xmlns="urn:oasis:names:tc:xliff:document:1.2">
  <file source-language="en" datatype="plaintext" original="ng2.template">
    <body>
      <trans-unit id="I18nTitle" datatype="html">
        <target>Internationalisierung</target>
      </trans-unit>
      <trans-unit id="I18nAbstract" datatype="html">
        <target>
            Essen meines Besitzers verspeisen...
        </target>
      </trans-unit>
      <trans-unit id="I18nSvgText" datatype="html">
        <target>Ich mag SVG!</target>
      </trans-unit>
      <trans-unit id="I18nPlurals" datatype="html">
        <target>{VAR_PLURAL, plural, =0 {keine W&ouml;lfe} =1 {ein Wolf} =2 {zwei W&ouml;lfe} other {ein Wolfsrudel} }</target>
      </trans-unit>
    </body>
  </file>
</xliff>
`;

export function getTranslationProviders(): Promise<Object[]> {
  // Try changing locale to de
  let locale = 'en';

  // return no providers if fail to get translation file for locale
  const noProviders: Object[] = [];

  // No locale or U.S. English: no translation providers
  if (!locale || locale !== 'de') {
    return Promise.resolve(noProviders);
  }

  return Promise.resolve([
      { provide: TRANSLATIONS, useValue: deXlf },
      { provide: TRANSLATIONS_FORMAT, useValue: 'xlf' },
      { provide: LOCALE_ID, useValue: locale },
    ]);
}
