import { Component, OnInit } from '@angular/core';
import {FilterSettingsModel, IFilter} from '@syncfusion/ej2-angular-grids';
import {DashboardService} from '../dashboard.service';
import {CloudFile} from '../../models/dashboard/cloudFile';
import {BillItem} from '../../models/dashboard/bill';

@Component({
  selector: 'app-file-bill',
  templateUrl: './file-bill.component.html',
  styleUrls: ['./file-bill.component.scss']
})
export class FileBillComponent implements OnInit {
  public data: BillItem[];
  public filterOptions: FilterSettingsModel;
  public filter: IFilter;


  constructor(private dashboard: DashboardService) { }

  ngOnInit(): void {
    this.filterOptions = {
      type: 'Menu'
    };
    this.filter = {
      type: 'CheckBox'
    };
    this.dashboard.currentFile$.subscribe((file: CloudFile) => this.data = file?.bill);
  }



}
