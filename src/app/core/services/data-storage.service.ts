import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment.development";
import { Project } from "../models/project";
import { Skill } from "../models/skill";
import { SocialLabel } from "../models/social-label";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  constructor(private _http: HttpClient) {}

  private _url = `${environment.api.url}/data`;

  getSocialLabels(): Observable<SocialLabel[]> {
    return this._http.get<SocialLabel[]>(`${this._url}/socialLabels`);
  }

  getSkillset(): Observable<Skill[]> {
    return this._http.get<Skill[]>(`${this._url}/skillset`);
  }

  getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(`${this._url}/projectItems`);
  }
}
