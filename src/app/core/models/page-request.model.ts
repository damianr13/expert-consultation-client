export class PageRequest {
  number: number;
  size: number;

  constructor(pageNumber: number = 0, size: number = 20) {
    this.number = pageNumber;
    this.size = size;
  }
}
