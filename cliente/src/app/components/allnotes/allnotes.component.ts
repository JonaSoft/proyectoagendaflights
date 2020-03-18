import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/servicios/data.service';
import { NgForm, FormGroup, FormControl, Validators } from '@angular/forms';
import { Note } from '../../models/note';
import { ExporterService } from '../../servicios/enviarhacia.service';
import { AuthService } from '../../servicios/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-allnotes',
  templateUrl: './allnotes.component.html',
  styleUrls: ['./allnotes.component.css']
})
export class AllnotesComponent implements OnInit {
allnotes=[]
  constructor(private dataService:DataService) { }

  ngOnInit() {
    this.allNotas()
  }
  allNotas(){
    this.allnotes=[];
    console.log('ingreso al init de all notes')
    this.dataService.mostrarAllNotes()
      .subscribe(res=>{
        console.log('la respuesta',res)
        for(let i in res['allnotes']){
          this.allnotes.push(res['allnotes'][i]);
        }
        this.allnotes=this.allnotes.sort((prev,next)=>{
          return prev.date-next.date;
          });
        console.log(this.allnotes)
       
    })
    
  }
  eliminarNota(){
    
    let idnota= document.getElementById("idnote").innerText
    console.log(idnota)
    
    this.dataService.deleteFormNote(idnota)
    .subscribe(res=>{
      console.log(res);
      this.allNotas()
    })
    //this.allNotas()
  }



}
