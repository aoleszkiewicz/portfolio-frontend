import { Component, OnDestroy, OnInit } from "@angular/core";
import { Skill } from "../../core/models/skill";
import { DataStorageService } from "../../core/services/data-storage.service";
import { Subject, take } from "rxjs";

@Component({
  selector: "app-skillset",
  templateUrl: "./skillset.component.html",
  styleUrls: ["./skillset.component.scss"],
})
export class SkillsetComponent implements OnInit, OnDestroy {
  readonly title: string = "skillset⚒️";

  skillSet$: Subject<Skill[]> = new Subject<Skill[]>();

  constructor(readonly _data: DataStorageService) {}

  ngOnInit(): void {
    this._data
      .getSkillset()
      .pipe(take(1))
      .subscribe((skillSet: Skill[]) => this.skillSet$.next(skillSet));
  }

  ngOnDestroy(): void {
    this.skillSet$.unsubscribe();
  }
}
