import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']

})
export class PostListComponent {
  // posts = [
  //   {title: 'First post', content: 'Alaska has some of the coldest roads' },
  //   {title: 'Second post', content: 'there is one more extreme than the rest' },
  //   {title: 'Third post', content: 'The Dalton highway is one of the most isolated roads in the world' }
  // ];

  @Input() posts = [];

}
