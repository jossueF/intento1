import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit{

  constructor() {
    Chart.register(...registerables);
   }
 

  ngOnInit(): void {
    const lineCanvas: any = document.getElementById('lineCanvas')
    const lineChart = new Chart(lineCanvas.getContext('2d'), {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          { data: [12, 15, 18, 14, 11, 19, 12], label: 'Orders', borderColor: 'rgba(54, 162, 235)' },
          { data: [65, 59, 80, 81, 56, 55, 40], label: 'Sales', borderColor: 'rgb(75, 192, 192)' },
        ],
      },
      options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
      }
    });
  }


}
