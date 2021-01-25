import { Component, OnInit } from '@angular/core';
import {STUDENTS} from '../mock-students';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
  form_red: boolean;

  students = STUDENTS;
  selectedStudent: StudentComponent;


  constructor() { }

  ngOnInit(): void {
    this.form_red = false;
  }

}
