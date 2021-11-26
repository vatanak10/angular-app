import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { RoleService } from '../services/role.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  hide = true;
  form: FormGroup;
  email = new FormControl('', [Validators.required, Validators.email]);
  roles: any;

  constructor(private router: Router, private fb: FormBuilder, private authService: AuthService, private roleService: RoleService) {
    this.form = fb.group({
      fullName: new FormControl(null),
      userName: new FormControl(null),
      gender: new FormControl(null),
      email: new FormControl(null),
      password: new FormControl(null),
      phone: new FormControl(null),
      address: new FormControl(null),
      roleId: new FormControl(null)
    });
  }

  ngOnInit(): void {
    this.roleService.getAllRoles().subscribe((result: any) => {
      this.roles = result;
    });
    console.log(this.roles);
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  onSubmit(): void {
    // this.authService.register({
    //   username: this.form.value.username,
    //   password: this.form.value.password
    // })
}
}
