import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css'],
})
export class GithubProfileComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    console.log(id);

    // this.route.paramMap.subscribe((params) => {
    //   let id = Number(params.get('id'));
    //   console.log(id);
    // });
  }
}