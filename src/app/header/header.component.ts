import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() navigateURL = new EventEmitter<string>();

  loadedRouter = 'recipes';

  navigate(url: string) {
      this.loadedRouter = url;
      console.log(this.loadedRouter);
      this.navigateURL.emit(this.loadedRouter);
  }

  constructor() { }

  ngOnInit() {
  }


}
