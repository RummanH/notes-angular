import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(private authService: AuthService, private router: Router) {}
  signupForm = new FormGroup({
    name: new FormControl(),
    email: new FormControl(''),
    birth: new FormControl(''),
    password: new FormControl(''),
  });
  onSubmit(): void {
    if (
      this.signupForm.value.name &&
      this.signupForm.value.email &&
      this.signupForm.value.birth &&
      this.signupForm.value.password
    ) {
      // this.auth.login(this.loginForm.value).subscribe(
      //   (result) => {
      //     console.log(result);
      //     this.router.navigate(['/admin']);
      //   },
      this.authService
        //@ts-ignore
        .signup(this.signupForm.value);

      //   (err: Error) => {
      //     alert(err.message);
      //   }
      // );
    } else {
      alert('Please provide all values!');
    }
  }
}
