import { Component, Inject, OnInit } from '@angular/core';
import { BaseService } from 'src/app/service/base.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {

  constructor(
    @Inject(BaseService) private baseService: BaseService
  ) { }

  ngOnInit(): void {
    this.baseService.getBase().subscribe(x => console.log(x));
  }
}
