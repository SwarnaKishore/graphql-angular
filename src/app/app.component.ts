import { Component, OnInit  } from '@angular/core';

import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

const allPosts = gql`query getAllPosts {
  posts: allPosts {
    title
    url
  }
}`;


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {
  loading = true;
  data: any;

  constructor(private apollo: Apollo) {}

    ngOnInit() {
      this.apollo.query({
          query: allPosts
        }).subscribe(({data, loading}) => {
          this.data = data;
          this.loading = loading;
        });
      }
}
