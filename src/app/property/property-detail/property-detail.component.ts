import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  imports: [],
  templateUrl: './property-detail.component.html',
  styleUrl: './property-detail.component.css'
})
export class PropertyDetailComponent implements OnInit {

  public propertyId!: number;
  constructor(private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {

    this.propertyId = Number(this.route.snapshot.params['id']);
    
  }

  onSelectNext(){

    this.propertyId += 1;

    this.router.navigate(['property-detail', this.propertyId])

  }

}
