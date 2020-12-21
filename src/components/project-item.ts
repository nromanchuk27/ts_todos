import { autobind } from "../decorators/autobind.js";
import { Project } from "../modules/project.js";
import { Component } from "./base-components.js";
import { Draggable } from "../modules/drag-drop.js";

export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable {
  constructor(hostId: string, private project: Project) {
    super("single-project", hostId, false, project.id);
    this.configure();
    this.renderContent();
  }

  get persons() {
    return this.project.people === 1
      ? "1 person"
      : `${this.project.people} persons`;
  }

  @autobind
  dragStartHandler(event: DragEvent) {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  @autobind
  dragEndHandler(event: DragEvent) {
    event.dataTransfer!.getData;
    console.log("drag end");
  }

  configure() {
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }
  renderContent() {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.persons + " assigned";
    this.element.querySelector("p")!.textContent = this.project.description;
  }
}
