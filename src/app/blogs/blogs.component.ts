import { Component, OnInit } from '@angular/core';
import { BeritaserviceService } from '../services/beritaservice.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.css']
})
export class BlogsComponent implements OnInit {

  public blog : any = [];
  constructor(private nwsservice : BeritaserviceService) { }

  ngOnInit(): void {
    this.blog = this. nwsservice.getBlogs(); 
  }

}
