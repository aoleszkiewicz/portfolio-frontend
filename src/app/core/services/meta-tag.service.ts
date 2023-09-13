import { Injectable } from '@angular/core';
import { Meta } from "@angular/platform-browser";
import { BehaviorSubject } from "rxjs";
import { DEFAULT_META } from "../constants/default-meta";
import { MetaDetails } from "../models/meta-details";

@Injectable({
  providedIn: 'root'
})
export class MetaTagService {
  constructor(private _metaService: Meta) {
    this._meta$.subscribe((metaDetails) => {
      console.log(metaDetails);
      this._setMetaTags(metaDetails);
    })
  }

  private _meta$ = new BehaviorSubject<MetaDetails>(DEFAULT_META);

  public set meta(metaDetails: MetaDetails) {
    this._meta$.next(metaDetails);
  }

  private _setMetaTags(metaDetails: MetaDetails) {
    this._setOpenGraphMetaTags(metaDetails);
    this._setTwitterMetaTags(metaDetails);
  }

  private _setOpenGraphMetaTags(metaDetails: MetaDetails) {
    for (const [key, value] of Object.entries(metaDetails)) {
      this._metaService.addTag({ property: `og:${key}`, content: value })
    }
  }

  private _setTwitterMetaTags(metaDetails: MetaDetails) {
    for (const [key, value] of Object.entries(metaDetails)) {
      this._metaService.addTag({ name: `twitter:${key}`, content: value })
    }
  }

  // TODO: Make it more generic
  private _removeMetaTags() {
    this._metaService.removeTag("property='og:title'");
    this._metaService.removeTag("property='og:description'");
    this._metaService.removeTag("property='og:url'");
    this._metaService.removeTag("property='og:type'");
    this._metaService.removeTag("property='og:image'");
    this._metaService.removeTag("name='twitter:title'");
    this._metaService.removeTag("name='twitter:description'");
    this._metaService.removeTag("name='twitter:url'");
    this._metaService.removeTag("name='twitter:card'");
    this._metaService.removeTag("name='twitter:image'");
  }
}
