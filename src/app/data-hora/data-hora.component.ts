import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-hora',
  templateUrl: './data-hora.component.html',
  styleUrls: ['./data-hora.component.css']
})
export class DataHoraComponent implements OnInit {

  // public Date dataHora; - Java
  public dataHora: Date;

  // public NomeClasse() { ... - Java
  constructor() { 
    this.dataHora = new Date();
  }

  ngOnInit(): void {
  }

}
