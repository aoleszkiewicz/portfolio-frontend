import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Project } from "../models/project";
import { Skill } from "../models/skill";
import { SocialLabel } from "../models/social-label";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  private url = `https://localhost:44318/data`;

  constructor(private _http: HttpClient) {}

  getSocialLabels(): Observable<SocialLabel[]> {
    return this._http.get<SocialLabel[]>(`${this.url}/socialLabels`);
  }

  getSkillset(): Observable<Skill[]> {
    return this._http.get<Skill[]>(`${this.url}/skillset`);
  }

  getProjects(): Observable<Project[]> {
    return this._http.get<Project[]>(`${this.url}/projectItems`);
  }
}
