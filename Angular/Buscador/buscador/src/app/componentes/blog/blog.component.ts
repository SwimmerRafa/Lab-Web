import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {ConsolasService} from '../../servicios/consolas.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})

export class BlogComponent implements OnInit {
  formulario: FormGroup
  blogsAsincorno : any
  isClicked : boolean = false

  constructor(public consolasService : ConsolasService) {
    this.formulario = new FormGroup({
      '_id' : new FormControl(""),
      'nombre': new FormControl('', [Validators.required, Validators.minLength(5)]),
      'fecha': new FormControl( new Date()),
      'entrada' : new FormControl('')
    })

    this.blogsAsincorno = new Promise( (resolve, reject) => {
      this.consolasService.getBlogs().subscribe(
        blogs => {
          console.log(blogs);
          resolve(blogs);
        }
      )
    })

  }

  ngOnInit(): void {
  }

  guardar(){
    if(this.formulario.valid){
      new Promise( (resolve, reject) => {
        this.consolasService.agregarBlog(this.formulario.value).subscribe(
          consolas => {
            resolve()
          }
        )
      })
      window.location.reload()
    }

    console.log(this.isClicked)
  }

}
