import { Component, OnDestroy, OnInit } from "@angular/core";
import { Project } from "../../core/models/project";
import { DataStorageService } from "../../core/services/data-storage.service";
import { Subject, take } from "rxjs";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.scss"],
})
export class ProjectsComponent implements OnInit, OnDestroy {
  readonly title: string = "projects📚";

  projectItems$: Subject<Project[]> = new Subject<Project[]>();

  constructor(readonly _data: DataStorageService) {}

  ngOnInit(): void {
    this._data
      .getProjects()
      .pipe(take(1))
      .subscribe((projects: Project[]) =>
        this.projectItems$.next(projects)
      );
  }

  ngOnDestroy(): void {
    this.projectItems$.unsubscribe();
  }
}
