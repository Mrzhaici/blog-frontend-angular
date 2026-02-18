import { ApplicationConfig, importProvidersFrom, isDevMode, LOCALE_ID } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideTransloco } from '@jsverse/transloco';
import { TranslocoHttpLoader } from './transloco-loader';

registerLocaleData(zh);


// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  // return new TranslateHttpLoader(httpClient);
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(FormsModule),
    importProvidersFrom(HttpClientModule),
    provideHttpClient(withFetch()),
    // importProvidersFrom(TranslateModule.forRoot()),
    // importProvidersFrom(TranslateModule.forRoot({
    //   loader: {
    //     provide: TranslateLoader,
    //     useFactory: HttpLoaderFactory,
    //     deps: [HttpClient]
    //   }
    // })),
    // {provide: LOCALE_ID, useValue: 'zh-Hans-CN' },
    provideTransloco({
            config: {
                availableLangs: ["en", "zh_cn"],
                defaultLang: "zh_cn",
                // Remove this option if your application doesn't support changing language in runtime.
                reRenderOnLangChange: true,
                prodMode: !isDevMode()
            },
            loader: TranslocoHttpLoader
        }),
    provideAnimations(),
  ]
};
