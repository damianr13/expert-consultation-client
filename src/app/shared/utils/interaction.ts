export class Interaction {

  static showSideNav(): void {
    this.addClassToBody('g-sidenav-pinned');
    this.removeClassFromBody('g-sidenav-hidden');
  }

  static hideSideNav(): void {
    this.removeClassFromBody('g-sidenav-pinned');
    this.addClassToBody('g-sidenav-hidden');
  }

  static bodyHasClass(clazz: string): boolean {
    return document.body.classList.contains(clazz);
  }

  static addClassToBody(clazz: string): void {
    document.body.classList.add(clazz);
  }

  static removeClassFromBody(clazz: string): void {
    document.body.classList.remove(clazz);
  }

  static addClassToElement(elementClassName: string, clazz: string): void {
    const element: Element = document.getElementsByClassName(elementClassName)[0];
    element.classList.add(clazz);
  }

  static removeClassFromElement(elementClassName: string, clazz: string): void {
    const element: Element = document.getElementsByClassName(elementClassName)[0];
    element.classList.remove(clazz);
  }
}
