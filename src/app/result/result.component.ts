import { TmplAstBoundAttribute } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  
  public mark1:number = 10;
  public mark2:number = 10;
  public mark3:number = 10;
  public mark4:number = 10;
  public total:number = 0;

 public onClick(m1:number,m2:number,m3:number,m4:number){
  this.total=m1+m2+m3+m4;
 }

  constructor() { }

  ngOnInit(): void {
  }

}
