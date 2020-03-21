import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute } from '@angular/router';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import {DataService} from '../../servicios/data.service'

@Component({
  selector: 'app-editnote',
  templateUrl: './editnote.component.html',
  styleUrls: ['./editnote.component.css']
})
export class EditnoteComponent implements OnInit {
  note:any = []
 
  constructor(private activateRoute:ActivatedRoute,
              private dataService:DataService,
              private router:Router) { 
    this.activateRoute.params.subscribe(params =>{
      console.log(params['id']);
      this.dataService.mostrarFormNote()
       .subscribe(resnote=>{
         console.log('respuesta',resnote['allnotes'][params['id']])
         this.note = resnote['allnotes'][params['id']]
         console.log(this.note)
       })
      
    })
  }

  ngOnInit() {
  }
  noteEdit(){
    this.router.navigate(['/home/allnotes'])
  }

}
