import { SortData } from "./SortData";

export class Strings extends SortData {
  constructor(public str: string) {
    super();
  }

  get length(): number {
    return this.str.length;
  }

  compare(indexLeft: number, indexRight: number): boolean {
    return (
      this.str[indexLeft].toLowerCase() > this.str[indexRight].toLowerCase()
    );
  }

  swap(indexLeft: number, indexRight: number): void {
    const charArgs = [...this.str];

    const leftArg = charArgs[indexLeft];
    charArgs[indexLeft] = charArgs[indexRight];
    charArgs[indexRight] = leftArg;

    this.str = charArgs.join("");
  }
}
