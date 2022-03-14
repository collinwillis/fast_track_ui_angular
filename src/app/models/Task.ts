export class Task {
  private id: number = -1;
  private name: string = "";
  private description: string = "";
  private hours: number = 0;
  private status: number = 0;

  constructor(
    id: number,
    name: string,
    description: string,
    hours: number,
    status: number
  ) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.hours = hours;
    this.status = status;
  }

  get Id(): number {
    return this.id;
  }
  set Id(value: number) {
    this.id = value;
  }
  get Name(): string {
    return this.name;
  }
  set Name(value: string) {
    this.name = value;
  }
  get Description(): string {
    return this.description;
  }
  set Description(value: string) {
    this.description = value;
  }
  get Hours(): number {
    return this.hours;
  }
  set Hours(value: number) {
    this.hours = value;
  }
  get Status(): number {
    return this.status;
  }
  set Status(value: number) {
    this.status = value;
  }
}
