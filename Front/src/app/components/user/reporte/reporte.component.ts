import { Component, OnInit } from '@angular/core';
import {
  ApexPlotOptions,
  ApexFill,
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexStroke,
  ApexYAxis,
  ApexTitleSubtitle,
  ApexLegend
} from "ng-apexcharts";
import { Oportunidad } from 'src/app/Model/oportunidad';
import { OportunidadesService } from 'src/app/Services/oportunidades.service';
import { user } from 'src/app/Model/user';
import { UserService } from 'src/app/Services/user.service';
import { CompanyService } from 'src/app/Services/company.service';

import { series } from './datos-ejemplo';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  yaxis: ApexYAxis;
  title: ApexTitleSubtitle;
  labels: string[];
  legend: ApexLegend;
  subtitle: ApexTitleSubtitle;
};

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})

export class ReporteComponent implements OnInit {

  chartOptions: ChartOptions = {} as ChartOptions;

  constructor(public userservice: UserService, public companyservice: CompanyService,public OportunidadesService : OportunidadesService){}

 informeGeneral: any[] = [];
  informeNotas: any[] = [];
  totalProfit: number = 0;
  Seereport:boolean=false;

  ngOnInit(){

    this.chartOptions = {
      series: [
        {
          name: "STOCK ABC",
          data: series.monthDataSeries1.prices
        }
      ],
      chart: {
        type: "area",
        height: 350,
        zoom: {
          enabled: false
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: "straight"
      },

      title: {
        text: "Fundamental Analysis of Stocks",
        align: "left"
      },
      subtitle: {
        text: "Price Movements",
        align: "left"
      },
      labels: series.monthDataSeries1.dates,
      xaxis: {
        type: "datetime"
      },
      yaxis: {
        opposite: true
      },
      legend: {
        horizontalAlign: "left"
      }
    };
  }

  generarReporte() {
    this.OportunidadesService.Reporte().subscribe(
      (data: any) => {
        // Almacenar el informe general
        this.informeGeneral = data;
      },
      (error) => {
        console.error('Error al generar el informe general:', error);
      }
    );

    this.OportunidadesService.ReporteAverage().subscribe(
      (data: any) => {
        // Almacenar el informe de notas
        this.informeNotas = data;
        // Almacenar el TotalProfit
        this.totalProfit = this.informeNotas.reduce((total, item) => total + item.totalProfit, 0);
        // Generar el informe HTML aquí
      },
      (error) => {
        console.error('Error al obtener el informe de notas:', error);
      }
    );
    console.log(this.informeGeneral)
    console.log(this.informeNotas)
  }
}
  

