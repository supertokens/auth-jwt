import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StepService } from '../shared/services/step.service';
import { DemoService } from '../shared/services/demo.service'
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-send-jwt3',
  templateUrl: './send-jwt3.component.html',
  styleUrls: ['./send-jwt3.component.scss']
})
export class SendJwt3Component implements OnInit {

  constructor(
    private router: Router,
    private demoService: DemoService,
    private stepService: StepService
  ) { 
    this.stepService.setStep(9)
  }

  ngOnInit(): void {
  }

  sendTokenThroughRequestHeaders(){
    var token = localStorage.getItem('token')
    var headers = new HttpHeaders()
    .set("Content-Type", "application\/json")
    .set("Authorization", "Bearer " + token)
    this.demoService.remote().getFromRequestHeader(headers).subscribe((response)=>{
      console.log(response)
    })
  }

  backStep(){
    this.stepService.setStep(8)
    this.router.navigate(['send-jwt2'])
  }
  nextStep(){
    this.stepService.setStep(10)
    this.router.navigate(['send-jwt4'])
  }
}
