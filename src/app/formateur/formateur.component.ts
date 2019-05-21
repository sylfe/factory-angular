import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-formateur',
  templateUrl: './formateur.component.html',
  styleUrls: ['./formateur.component.css']
})
export class FormateurComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, router: Router) { }

  ngOnInit() {
  }

  estDisponible(date1: Date, date2: Date) {}
}
