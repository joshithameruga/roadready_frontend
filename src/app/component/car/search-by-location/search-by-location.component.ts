import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Service } from '../../../service/service';

@Component({
  selector: 'app-search-by-location',
  templateUrl: './search-by-location.component.html',
  styleUrls: ['./search-by-location.component.css']
})
export class SearchByLocationComponent {


  constructor(private service:Service , private route :ActivatedRoute){}

}
