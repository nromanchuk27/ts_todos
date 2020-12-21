import { Component } from "./base-components.js";
import { autobind } from "../decorators/autobind.js";
import { Validatable, validate } from "../util/validation.js";
import { projectState } from "../state/project-state.js";

export class ProjectInput extends Component<HTMLDivElement, HTMLFormElement> {
  titleInputElement: HTMLInputElement;
  descriptionInputElement: HTMLInputElement;
  peopleInputElement: HTMLInputElement;

  constructor() {
    super("project-input", "app", true, "user-input");
    this.configure();
  }
  private getUserInput(): [string, string, number] | void {
    const data: [string, string, number] = [
      String(this.titleInputElement.value),
      String(this.descriptionInputElement.value),
      Number(this.peopleInputElement.value),
    ];

    const titleValidatable: Validatable = {
      value: data[0],
      required: true,
    };
    const peopleValidatable: Validatable = {
      value: data[1],
      required: true,
      min: 1,
    };
    const descriptionValidatable: Validatable = {
      value: data[2],
      required: true,
      minLength: 5,
    };

    return [
      titleValidatable,
      peopleValidatable,
      descriptionValidatable,
    ].every((item) => validate(item))
      ? data
      : undefined;
  }

  private clearInputs() {
    this.titleInputElement.value = "";
    this.descriptionInputElement.value = "";
    this.peopleInputElement.value = "";
  }

  configure() {
    this.titleInputElement = this.element.querySelector(
      "#title"
    ) as HTMLInputElement;
    this.descriptionInputElement = this.element.querySelector(
      "#description"
    ) as HTMLInputElement;
    this.peopleInputElement = this.element.querySelector(
      "#people"
    ) as HTMLInputElement;

    this.element.addEventListener("submit", this.submitHandler);
  }

  @autobind
  private submitHandler(event: Event) {
    event.preventDefault();
    const userInput = this.getUserInput();
    if (Array.isArray(userInput)) {
      this.clearInputs();
      projectState.addProject(...userInput);
    }
  }

  renderContent() {}
}
