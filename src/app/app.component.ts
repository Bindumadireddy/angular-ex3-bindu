import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  Title:any="";
  Author:any="";
  idcount:number=0;
  array=[];
  add(){
   this.idcount=this.idcount+1
    this.array.push({
      id:this.idcount,
      title:this.Title,
      author:this.Author

    })
    this.Title=""
    this.Author=""
   
  }
  x(number)
  {
    this.array=this.array.filter((item)=>item.id!== number)
  }
}
