import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      email: new FormControl(null,
        [
          Validators.required,
          Validators.email
        ]),
      password: new FormControl(null,
        [
          Validators.required,
          Validators.minLength(6)
        ]),
      address: new FormGroup({
        country: new FormControl('ru'),
        city: new FormControl(null,
          Validators.required
        )
      })
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.form);
    this.form.reset();
  }
}
