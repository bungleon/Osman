import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Bank} from './Bank';
import {GetValue} from './GetValue';
import {LineChartData, LineChartResponse} from './model/line-chart-response';
import {BaseChartDirective} from 'ng2-charts';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'My First Angular App!';
  public erman = 'Erman';
  public d;
  public BankList;
  public banks: any[] = [];
  public bank1: string;
  public bank2: string;
  public bank3: any;
  public bank4: GetValue = new GetValue();
  public bank5: GetValue = new GetValue();
  public bank6: GetValue = new GetValue();
  public bankList: GetValue[] = [];
  @ViewChild(BaseChartDirective)
  public chart: BaseChartDirective;
  public count: number;

  // Line Chart Values
  public lineChartValues = new LineChartResponse([], [], [], [], []);
  public lineChatDatas: LineChartData[];

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.dongu();
  }

  dongu() {
    this.d = ['Erman', 'Ali', 'Batuhan', 'Oguz'];
    this.banks = ['Bank1', 'Bank2', 'Bank3', 'Bank4'];
    this.BankList = [
      new Bank(1, 'Ali Bank', 'ALIXXX'),
      new Bank(2, 'Oguz Bank', 'OGUZXXX'),
      new Bank(3, 'Batuhan Bank', 'BATUXXX')
    ];
    this.http.post('http://localhost:8090/chart/line-chart', this.bank6).subscribe((data: LineChartResponse) => {
      this.lineChartValues = data;
      console.log(this.lineChartValues);
      this.lineChatDatas = [
        new LineChartData(this.lineChartValues.list1, this.lineChartValues.series[0]),
        new LineChartData(this.lineChartValues.list2, this.lineChartValues.series[1]),
        new LineChartData(this.lineChartValues.list3, this.lineChartValues.series[2])
      ];
      this.lineChartData = this.lineChatDatas;
      console.log(this.lineChartValues.labels.length);
      console.log(this.lineChartLabels.length);
      // Diziden eleman eksildiğinde döngüdeki kontrolde de değişiklik oluyor.
      this.count = this.lineChartLabels.length;
      for (let i = 0; i < this.count; i++) {
        this.lineChartLabels.pop();
        console.log(i);
      }
      for (let i = 0; i < this.lineChartValues.labels.length; i++) {
        this.lineChartLabels.push(this.lineChartValues.labels[i]);
      }
    });
  }

  buttonSubmit() {
    console.log(this.bank1);
    console.log(this.bank2);
    this.bank3 = this.bank1 + ' ' + this.bank2;
  }

  buttonGet() {
    this.http.get('http://localhost:8090/sacma/bisey').subscribe(data => {
      Object.assign(this.bank4, data);
      console.log(this.bank4);
    });
  }

  buttonPost() {
    this.bank6.appVersion = 'app version';
    this.bank6.deviceOsVersion = 'device os version';
    this.bank6.parola = 'parola';
    this.bank6.sifreNetIndex = 'sifre index';

    this.http.post('http://localhost:8090/sacma/bisey', this.bank6).subscribe(data => {
      Object.assign(this.bank5, data);
      console.log(this.bank5);
    });
  }

  buttonPostListData() {
    this.bank6.appVersion = 'app version';
    this.bank6.deviceOsVersion = 'device os version';
    this.bank6.parola = 'parola';
    this.bank6.sifreNetIndex = 'sifre index';

    this.http.post('http://localhost:8090/sacma/bisey/cok', this.bank6).subscribe(data => {
      Object.assign(this.bankList, data);
      console.log(this.bankList);
    });
  }

  // Chart 1

  public lineChartData: Array<any> = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'},
    {data: [18, 48, 77, 9, 100, 27, 40], label: 'Series C'}
  ];
  public lineChartLabels: Array<any> = ['a', 'b', 'c', 'ç', 'd', 'e', 'f', 'g', 'ğ', 'h', 'ı'];
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartColors: Array<any> = [
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    },
    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
      pointBackgroundColor: 'rgba(77,83,96,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(77,83,96,1)'
    },
    { // grey
      backgroundColor: 'rgba(148,159,177,0.2)',
      borderColor: 'rgba(148,159,177,1)',
      pointBackgroundColor: 'rgba(148,159,177,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(148,159,177,0.8)'
    }
  ];
  public lineChartLegend: boolean = true;
  public lineChartType: string = 'line';

  public randomize(): void {
    let _lineChartData: Array<any> = new Array(this.lineChartData.length);
    for (let i = 0; i < this.lineChartData.length; i++) {
      _lineChartData[i] = {data: new Array(this.lineChartData[i].data.length), label: this.lineChartData[i].label};
      for (let j = 0; j < this.lineChartData[i].data.length; j++) {
        _lineChartData[i].data[j] = Math.floor((Math.random() * 100) + 1);
      }
    }
    this.lineChartData = _lineChartData;
  }


  // Chart 2
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
  ];


  public randomize2(): void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
  }

  // Chart 3
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';


  // Chart 4
  public radarChartLabels: string[] = ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'];

  public radarChartData: any = [
    {data: [65, 59, 90, 81, 56, 55, 40], label: 'Series A'},
    {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType: string = 'radar';


  // Chart 5
  public pieChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData: number[] = [300, 500, 100];
  public pieChartType: string = 'pie';


  // Chart 6
  public polarAreaChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales', 'Telesales', 'Corporate Sales'];
  public polarAreaChartData: number[] = [300, 500, 100, 40, 120];
  public polarAreaLegend: boolean = true;

  public polarAreaChartType: string = 'polarArea';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
