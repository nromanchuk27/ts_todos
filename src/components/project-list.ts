import { DragTarget } from "../modules/drag-drop.js";
import { autobind } from "../decorators/autobind.js";
import { Project, ProjectStatus } from "../modules/project.js";
import { Component } from "./base-components.js";
import { projectState } from "../state/project-state.js";
import { ProjectItem } from "./project-item.js";

export class ProjectList
  extends Component<HTMLDivElement, HTMLElement>
  implements DragTarget {
  assignedProjects: Project[] = [];

  constructor(private type: "active" | "finished") {
    super("project-list", "app", false, `${type}-projects`);
    this.configure();
    this.renderContent();
  }

  private renderProjects() {
    const listEl = document.getElementById(
      `${this.type}-project-list`
    )! as HTMLUListElement;
    listEl.innerHTML = "";
    for (const prjItem of this.assignedProjects) {
      new ProjectItem(this.element.querySelector("ul")!.id, prjItem);
    }
  }

  @autobind
  dragOverHandler(event: DragEvent) {
    if (event.dataTransfer && event.dataTransfer.types[0] === "text/plain") {
      event.preventDefault();
      const listEl = this.element.querySelector("ul")!;
      listEl.classList.add("droppable"); // TODO: const
    }
  }

  @autobind
  dragHandler(event: DragEvent) {
    const prjId = event.dataTransfer.getData("text/plain");
    const status =
      this.type === "active" ? ProjectStatus.Active : ProjectStatus.Finished;
    projectState.moveProject(prjId, status);
  }

  @autobind
  dragLeaveHandler(_: DragEvent) {
    const listEl = this.element.querySelector("ul")!;
    listEl.classList.remove("droppable"); // TODO: const
  }

  configure() {
    this.element.addEventListener("dragover", this.dragOverHandler);
    this.element.addEventListener("dragleave", this.dragLeaveHandler);
    this.element.addEventListener("drop", this.dragHandler);
    projectState.addListener((projects: Project[]) => {
      const relevantProjects = projects.filter((it) => {
        if (this.type === "active") {
          return it.status === ProjectStatus.Active;
        }
        return it.status === ProjectStatus.Finished;
      });
      this.assignedProjects = relevantProjects;
      this.renderProjects();
    });
  }

  renderContent() {
    const listId = `${this.type}-project-list`;
    this.element.querySelector("ul")!.id = listId;
    this.element.querySelector(
      "h2"
    )!.textContent = `${this.type} projects`.toUpperCase();
  }
}
