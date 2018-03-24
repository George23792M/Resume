import { Component, OnInit } from '@angular/core';

import {AboutMeInterface} from './aboutMeInterface';
import {SkillsInterface} from './skillsInterface';
import {EducationInterface} from './educationInterface';
import {AddressInterface} from './addressInterface';
import {ContactInterface} from './contactInterface';
import {WorkExperienceInterface} from './work-experienceInterface';

import {ResumeService} from './resume.service';


@Component({
    
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css'],
  providers : [ResumeService]
})

export class ResumeComponent implements OnInit {


    
    
    title : string = 'Michael Vennamalla';
    
    aboutMe : AboutMeInterface[];
       
    
    
    
    skills : SkillsInterface[] = [
    
    
   
         
        {
            title: "Programming Languages",
             items: ["JAVA",
                 "C", 
                 "C++"]
        },
        
         {
             title: "Frameworks",
             items: [
                 "Spring Framwork",
                 "Hibernate"]
         },
       
        {
           title: "SDLC Methodologies",
             items: [
                 "SCRUM",
                 "WATERFALL"
           ]
        },
        {
              title: "Web Technologies",
             items: [
                 "HTML",
                 "CSS",
                 "ANGULAR 2",
                 "JAVASCRIPT"
           ]
        },
           {
             title: "Development IDEs",
             items: [
                 "Net Beans",
                 "Eclipse" ]
         },
          {
             title: "Database",
             items: [
                 "SQL",
                 "MYSQL"
            ]
         },
    
         {
             title: "Platforms",
             items: [
                 "Windows",
                 "Unix",
                 "Linux"
             ]
        },
  
         
         ];
            

    
    education: EducationInterface[] = [
    
        {
            
        school : "Northwestern Polytechnic University,",
            course : "Masters in Electrical Engineering,",
            gpa : "3.54",
            graduationYear : "June 2016",
            project: "Skin Tone Based Data Hiding using Stegnography"
       },
        {
            school : "Jawaharlal Nehru Institute of Technology",
            course : "Bachelors in Electronics and Communication Engineering,",
              gpa : "3.00",
            graduationYear : "August 2014",
            project : "Drone with camera"
            
        }
        
        
        
        ];
    
    address : AddressInterface[] = [
    {
        address : "63 Carnoustie ln",
        city : "Springboro",
        state : "OH,",
        postal : "45066"
        }
         ];
    
    contact : ContactInterface;
    
    
    experience : WorkExperienceInterface[] = [
    
        {
         id : 1,   
        name : "User Interactive Web development"
          
        
        },
        {
            id : 2,
        name : "Resume (ANGULAR2)"
        
        }
        
        
        
        ];
    
    showAboutMe : boolean = false;
    
    showSkills : boolean = false;
  
    showEducation : boolean = false;
    
    showExperience : boolean = false;
    
    showAddress : boolean = false;
    
    errorMessage : string;
    
    
      constructor(private _resumeService : ResumeService) { }
    
    
    
  
    
    OnClickShowAboutMe() : void {
        
        this.showAboutMe = !this.showAboutMe;
        
        }
    
    OnClickShowSkills() : void {
        
       this.showSkills = !this.showSkills;
    }
    
    OnClickShowEducation() : void {
        
        this.showEducation = !this.showEducation;
        
    
    }
    
    OnClickShowAddress():void {
        
        this.showAddress = !this.showAddress;
        
    
    }
    
    OnClickShowExperience() : void {
        
     this.showExperience = !this.showExperience;
    }

  ngOnInit() : void {
      
      this.aboutMe = this._resumeService.getAboutMe()
      .subscribe(aboutMe => {
            this.aboutMe = aboutMe;
             
      },
          error => this.errorMessage = <any>error);
  }

}
