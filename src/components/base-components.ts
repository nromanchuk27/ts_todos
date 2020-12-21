export abstract class Component<T extends HTMLElement, U extends HTMLElement> {
  templateElement: HTMLTemplateElement;
  hostElement: T;
  element: U;
  insertAtStart?: boolean;
  constructor(
    templateId: string,
    hostElementId: string,
    insertAtStart: boolean,
    newElementId?: string | undefined
  ) {
    this.templateElement = document.getElementById(
      templateId
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById(hostElementId)! as T;
    const importNode = document.importNode(this.templateElement.content, true);
    this.element = importNode.firstElementChild as U;
    this.element.id = `${newElementId}`;
    this.insertAtStart = insertAtStart;
    this.attach(this.insertAtStart);
  }
  private attach(position: boolean) {
    this.hostElement.insertAdjacentElement(
      position ? "afterbegin" : "beforeend",
      this.element
    );
  }
  abstract configure(): void;
  abstract renderContent(): void;
}
