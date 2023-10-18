import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CatApiService } from '../services/cat-api.service';

@Component({
  selector: 'app-cat-list',
  templateUrl: './cat-list.component.html',
  styleUrls: ['./cat-list.component.css']
})
export class CatListComponent implements OnInit {
  title = 'pragmaTest';
  catBreeds: any[] = [];

  constructor(private catApi: CatApiService, private router: Router) { }

  ngOnInit(): void {
    this.catApi.getCatBreeds().subscribe((data) => {
      this.catBreeds = data;
      console.log(this.catBreeds);
    });

  }

  seeMore(catID: string) {
    console.log(catID);
    this.router.navigate(['/cat-detail'], { queryParams: { catName: catID } })
  }
}
