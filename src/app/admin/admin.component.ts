import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  registrationForm: FormGroup;
  profiles?: any[];
  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required]],
      address: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      city: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],

    }, {
      validator: this.passwordMatchValidator
    });
  }

  ngOnInit() {
    this.getProfile();
  }



  onSubmit() { }

  passwordMatchValidator(formGroup: FormGroup) {
    const password = formGroup.get('password')?.value;
    const confirmPassword = formGroup.get('confirmPassword')?.value;

    if (password === confirmPassword) {
      formGroup.get('confirmPassword')?.setErrors(null);
    } else {
      formGroup.get('confirmPassword')?.setErrors({ mustMatch: true });
    }
  }

  getProfile() {
    this.http.get("/assets/mockAPI/getProfile.json").subscribe((profile: any) => {
      this.profiles = profile;
    });
  }
}
