import { Component, OnInit } from '@angular/core';
import { BeritaserviceService } from '../services/beritaservice.service';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  public nws : any;
  constructor(private nwsService : BeritaserviceService ) { }

  ngOnInit(): void {
    this.nws = this.nwsService.getNews();
  }

}
