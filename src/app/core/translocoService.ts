import { Injectable } from "@angular/core";
import { TranslocoService } from "@jsverse/transloco";


@Injectable({providedIn: "root"})
export class TranslocoLangService {
  
  constructor(
    private translocoService: TranslocoService
  ) {
  //   translocoService.selectTranslate('blog.transloco.achieve', { count: 5 })
  //     .subscribe((text) => {
  //       console.log("text:", text);
  //     });
  }

  
  public switchLanguage(lang: string) {
    this.translocoService.setActiveLang(lang);
  }
}