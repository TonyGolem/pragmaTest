import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CatApiService } from '../services/cat-api.service';

@Component({
  selector: 'app-cat-detail',
  templateUrl: './cat-detail.component.html',
  styleUrls: ['./cat-detail.component.css']
})
export class CatDetailComponent implements OnInit {

  catIdToSearch: string = '';
  allInfoCat: any;
  constructor(private route: ActivatedRoute, private catApiService: CatApiService, private router: Router) { }



  ngOnInit(): void {
    this.route.queryParams.subscribe((params => {
      this.catIdToSearch = params['catName']
      console.log(this.catIdToSearch);
    }))
    this.catApiService.getCatInfo(this.catIdToSearch).subscribe((data) => {
      console.log(data);
      this.allInfoCat = data;
    });

  }

  VolverLista() {
    this.router.navigate(['/cat-list'])
  }

}
