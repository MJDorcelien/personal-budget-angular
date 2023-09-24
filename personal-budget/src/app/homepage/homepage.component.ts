import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'pb-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})

export class HomepageComponent {

  public dataSource = {
    datasets: [
        {
            data: [
              200
            ],
            backgroundColor: [
                '#ffcd56',
                '#ff6384',
                '#36a2eb',
                '#fd6b19',
                '#AEE5D8',
                'pink',
                '#386641',
                '#361134'
            ],
        }
    ],
    labels: [
      'rent'
    ]
  };

  constructor(private http: HttpClient){
  }

  ngOnInit(): void {
    this.http.get('http://localhost:3000/budget')
    .subscribe((res: any) => {
      for (var i=0; i < res.data.myBudget.length; i++) {
        this.dataSource.datasets[0].data[i] = res.data.myBudget[i].budget;
        this.dataSource.labels[i] = res.data.myBudget[i].title;
        // this.createChart();
      }
    });
  }

//  createChart() {
//     var ctx = document.getElementById("myChart");
//     var myPieChart = new Chart(ctx, {
//         type: 'pie',
//         data: this.dataSource
//     });
//   }
}
