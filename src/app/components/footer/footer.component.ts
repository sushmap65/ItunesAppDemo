import { Component, OnInit } from '@angular/core';
import { SearchService } from '../../services';
import { ActivatedRoute, Router } from '@angular/router';

import { LocalStorageService } from '../../services';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}