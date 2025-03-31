import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone:false
})
export class ListPage implements OnInit {

  usuarios!: Observable<any>;

  @ViewChild(IonList) ionlist!: IonList;

  constructor( private dataservice: DataService ) { }

  ngOnInit() {
    this.usuarios= this.dataservice.getUsuarios();
  }

  favorite(user:any){
    console.log('favorite',user);
    this.ionlist.closeSlidingItems();
  }

  share(user:any){
    console.log('share',user);
    this.ionlist.closeSlidingItems();
  }

  delete(user:any){
    console.log('delete',user);
    this.ionlist.closeSlidingItems();
  }

}
