import {
  Component,
  OnInit,
  DoCheck,
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
} from '@angular/core';

@Component({
  selector: 'app-check-sample',
  templateUrl: './check-sample.component.html',
  styleUrls: ['./check-sample.component.css'],
})
export class CheckSampleComponent
  implements
    DoCheck,
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    OnInit,
    OnDestroy
{
  quantidade: number = 0;
  constructor() {}

  adicionar() {
    this.quantidade++;
  }

  decrementar() {
    this.quantidade--;
  }

  ngOnInit(): void {
    console.log('OnInit');
  }

  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }  

  ngAfterViewChecked(): void {
    console.log('AfterViewChecked');
  }

  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }

  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }

  ngDoCheck(): void {
    console.log('DoCheck');
  }

  ngOnDestroy(): void {
    console.log('OnDestroy');
  }

}
