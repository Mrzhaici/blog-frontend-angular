import { Injectable, Injector } from "@angular/core";
import { Title } from "@angular/platform-browser";
import { ActivatedRoute } from "@angular/router";
import { isString } from "lodash"


@Injectable()
export class TitleService {

  /** 设置默认标题名 */
  private readonly default = `Unknown`;


  constructor(
    private title: Title,
    private injector: Injector,
  ) {}

  /**
   * 通过路由获取需要设置的网页标题
   * @returns
   */
  private getByRoute(): string {
    let next = this.injector.get(ActivatedRoute);
    while (next.firstChild) { next = next.firstChild; }
    let realTitle = this.fetchTitle(next);
    while (!realTitle && next.parent) {
      next = next.parent;
      realTitle = this.fetchTitle(next);
    }
    return realTitle;
  }

  private fetchTitle(route: ActivatedRoute): string {
    const data = (route.snapshot && route.snapshot.data) || {};
    if (data.titleI18n) { data.title = data.titleI18n; }
    return data.title;
  }

  private _setTitle(title?: string) {
    let newTitle: string = title ? title : ''
    if(isString(newTitle)) {
      newTitle = title
    }else if(isString(this.getByRoute())){
      newTitle = this.getByRoute()
    }else {
      newTitle = this.default
    }
    this.title.setTitle(newTitle)
  }

  /**
   * 设置网页标题
   * @param title
   */
  setTitle(title?:string) {
    if(isString(title)) {
      this._setTitle(title)
    }
    else {
      this._setTitle()
    }
  }
}
