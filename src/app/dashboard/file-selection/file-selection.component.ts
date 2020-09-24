import { Component, OnInit } from '@angular/core';
import {FilterSettingsModel, IFilter} from '@syncfusion/ej2-angular-grids';
import {DashboardService} from '../dashboard.service';
import {CloudFile} from '../../models/dashboard/cloudFile';
import { Router } from '@angular/router';

@Component({
  selector: 'app-file-selection',
  templateUrl: './file-selection.component.html',
  styleUrls: ['./file-selection.component.scss']
})
export class FileSelectionComponent implements OnInit {
  public data: CloudFile[];
  public filterOptions: FilterSettingsModel;
  public filter: IFilter;

  constructor(private dashboard: DashboardService, private router: Router) { }

  ngOnInit(): void {
    this.dashboard.getCloudFiles().subscribe((files: CloudFile[]) => this.data = files);
  }

   rowSelected(event) {
      this.dashboard.setSelectedFile(event.data);
   }

   goHome() {
     this.router.navigateByUrl('/');
   }

}
