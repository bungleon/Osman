export class LineChartResponse {
  constructor(public list1: Array<number>,
              public list2: Array<number>,
              public list3: Array<number>,
              public labels: Array<string>,
              public series: Array<string>) {
  }
}

export class LineChartData {
  constructor(public data: Array<number>,
              public label: String) {
  }
}
