import { Component, OnInit , HostListener, Inject} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private document: any) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll() {
    const scrollPosition = window.pageYOffset;
    // console.log(scrollPosition);

    if (scrollPosition > 120){
      this.document.getElementById('site-navigation').style.position = 'fixed';
      this.document.getElementById('site-navigation').style.top = '0';


    }else{
      this.document.getElementById('site-navigation').style.position = 'relative';

    }
  }
}
