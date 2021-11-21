import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    hide = true;
    form: FormGroup;

    constructor(private router: Router, private fb: FormBuilder, private authService: AuthService) {
        this.form = fb.group({
            username: new FormControl("gtistudent"),
            password: new FormControl("testingTest")
          });
    }

    ngOnInit(): void {
    }

    onCancel(): void {
        this.router.navigate(['/items']);
      }

    onSubmit(): void {
        this.authService.login({
          username: this.form.value.username,
          password: this.form.value.password
        })
    }

}
