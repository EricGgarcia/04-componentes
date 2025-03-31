import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.page.html',
  styleUrls: ['./check.page.scss'],
  standalone: false
})
export class CheckPage implements OnInit {

  data= [
    {
      name: 'primary',
      Selection: false
    },
    {
      name: 'secondary',
      Selection: true
    },
    {
      name: 'tertiary',
      Selection: false
    },
    {
      name: 'success',
      Selection: true
    }
  ]

  constructor() { }

  ngOnInit() {
  }

  onClick(item: any){
    console.log(item);
  }

  verData(){
    console.log(this.data);
  }

}
