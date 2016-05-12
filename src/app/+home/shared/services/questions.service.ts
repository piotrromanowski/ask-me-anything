import { Injectable } from '@angular/core';
import {HTTP_PROVIDERS, Http} from '@angular/http';

@Injectable()
export class QuestionService {

    constructor(private _http: Http) { }
   
    postQuestion(question: String) {                
        return this._http.post(
            "http://piotr.codes/submit-question",
            JSON.stringify({question})
        );
    }
    
}