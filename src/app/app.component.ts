import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PrimeNGConfig } from 'primeng/api';
import { StoreEntity } from './ngrx/store/store';
import { getWorkspace } from './ngrx/actions/workspace.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private primengConfig: PrimeNGConfig, private store: Store<StoreEntity>) {}

  ngOnInit() {
      this.primengConfig.ripple = false;
      //this.store.dispatch(getWorkspace())
  }

}