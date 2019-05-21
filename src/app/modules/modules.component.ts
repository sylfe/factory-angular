import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-modules',
  templateUrl: './modules.component.html',
  styleUrls: ['./modules.component.css']
})
export class ModulesComponent implements OnInit {


  private monForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.monForm = this.fb.group( {
      duree: this.fb.control('', [Validators.required, Validators.minLength(2)]),
      matiere: this.fb.control('', [Validators.required])
    });
  }




  ngOnInit(): void {
  }

  send() {}
}
