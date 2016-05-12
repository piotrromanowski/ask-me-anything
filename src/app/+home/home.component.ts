import { Component, OnInit } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import {Observable} from 'rxjs/Rx';
import { FormBuilder, ControlGroup, Validators } from '@angular/common'
import { HTTP_PROVIDERS } from '@angular/http'

import { QuestionService } from './shared/services/questions.service'
import { Question } from './shared/interfaces'

@Component({
  moduleId: module.id,
  selector: 'app-home',
  templateUrl: 'home.component.html',
  providers: [HTTP_PROVIDERS, QuestionService],
  styleUrls: ['home.component.css']
})
export class HomeComponent implements OnInit {
    isLoading = true;
    questions$ : FirebaseListObservable<Question[]>;
    hidden = true;
    form: ControlGroup;
    showSuccess = true;
    showError = true;

  constructor(private af: AngularFire, 
              private fb : FormBuilder
              ,
              private _questionService: QuestionService
              ) {
                this.createForm();   
              }

  ngOnInit() {
    this.questions$ = this.af.database.list('/questions');               
    
    this.questions$.subscribe((x : Question[]) => {              
       // Stop spinner from spinning
       this.isLoading = false;  
    });   
  }

  createForm() {
      this.form = this.fb.group({
        newQuestion: ['', Validators.compose([ 
          Validators.required, 
          Validators.minLength(10) 
        ])]
      })
  }
  
  submitQuestion() {    
    const { newQuestion } = this.form.controls;
    
    this._questionService.postQuestion(newQuestion.value).subscribe(
            response => console.log(response),
            err => {
                console.log(err)
                this.showError = false;
                setTimeout(() => this.showError = true, 2000);
            },
            () => {
                this.hidden = !this.hidden;
                this.createForm();
                this.showSuccess = false;
                setTimeout(() => this.showSuccess = true, 2000);                     
            }
    );
    console.log(newQuestion.value)
  }
  
  toggle() {
    this.hidden = !this.hidden;
  } 

}
