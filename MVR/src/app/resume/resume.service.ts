import { Injectable } from '@angular/core';
import {AboutMeInterface } from './aboutMeInterface';


import {HttpClient,HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';

@Injectable()

export class ResumeService {

    private _aboutMeUrl = './assets/about-me.json';
    
    
  constructor(private _http : HttpClient) { }
    
   getAboutMe():Observable<AboutMeInterface[]> {
        
    return this._http.get<AboutMeInterface[]>(this._aboutMeUrl)
        .do(data => console.log('ALL:' + JSON.stringify(data)) )
        .catch(this.handleError);
       
    }

      private handleError (err:HttpErrorResponse){
        console.log(err.message);
        return Observable.throw(err.message);
        
    } 
  }   
    
    
    
    
    
        
       
   
