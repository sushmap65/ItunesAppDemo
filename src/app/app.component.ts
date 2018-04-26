import { Component } from '@angular/core';
import  { Observable } from 'rxjs';
import 'rxjs/Rx'; 
import { FormBuilder,
         FormGroup,
         Validators,
         FormControl
} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*form: FormGroup;
  comment = new FormControl("", Validators.required);
  name = new FormControl("", Validators.required);
  title = 'app works!';
  constructor(fb: FormBuilder)  {
    this.form = fb.group({
      "comment": this.comment,
      "name": this.name
    });

  	let ob = Observable.interval(1000)
  						.take(10)
              .map((data) => Date.now());
  						
  	console.log(ob);					
  	 ob.subscribe(value => {
  	 	//this.val.push(value);
  		console.log(value);
  	});


     this.form.valueChanges
         .filter(data => this.form.valid)
        .subscribe( data => console.log(JSON.stringify(data)));
  }

  onSubmit() {
    console.log("Form submitted!");
  }*/
}
