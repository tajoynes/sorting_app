import { SortData } from "./SortData";
import { Numbers } from "./Numbers";
import { Strings } from "./Strings";

// Date Array
const dateArr: any[] = [
  new Date(2012, 9, 24),
  new Date(2022, 9, 24),
  new Date(2020, 9, 24),
  new Date(2017, 9, 24),
];

const years = dateArr.map((date) => {
  return date.getFullYear();
});

const numData = new Numbers(years);
const strData = new Strings("bnjdkzjqoc");

numData.sort();
strData.sort();
console.log(numData.number);
console.log(strData.str);
