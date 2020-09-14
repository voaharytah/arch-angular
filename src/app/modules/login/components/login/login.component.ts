import { Router } from "@angular/router";
import { Observable } from "rxjs";
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl,
} from "@angular/forms";
import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";

import * as loginActions from "@services/redux/login/login.actions";
import { UserState, User } from "@app/data/models/user.model";
import * as LoginValidators from "../../../../shared/validators/login.validators";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  user$: Observable<UserState>;
  email: () => AbstractControl = () => this.form.get("email");

  constructor(
    private store: Store<{ user: UserState }>,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        email: [
          "test.mobile@forlis.com",
          [Validators.required, Validators.email],
        ],
        password: ["Ve7PqLF5B", [Validators.required]],
        confirmPassword: ["Ve7PqLF5B", [Validators.required]],
      },
      {
        validators: LoginValidators.passwordMatch,
      }
    );
  }

  ngOnInit(): void {
    this.user$ = this.store.pipe(select("user"));
  }

  get password(): AbstractControl {
    return this.form.get("password");
  }

  get confirmPassword(): AbstractControl {
    return this.form.get("confirmPassword");
  }

  invalidField(field: string): boolean {
    return (
      !this.form.get(field).valid &&
      (this.form.get(field).touched || this.form.get(field).dirty)
    );
  }

  login(): void {
    const credential: User = {
      email: this.email().value,
      password: this.password.value,
    };
    this.store.dispatch(loginActions.login({ credential }));
    this.user$.subscribe((user) => {
      if (user && user.token) {
        this.router.navigate(["/app/home"]);
      }
    });
  }
}
