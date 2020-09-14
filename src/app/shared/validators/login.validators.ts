import { ValidatorFn, AbstractControl } from "@angular/forms";

export const passwordMatch: ValidatorFn = (form: AbstractControl) => {
  const password = form.get("password").value;
  const confirm = form.get("confirmPassword").value;
  if (password && confirm) {
    return password !== confirm ? { notMatch: true } : null;
  }
  return null;
};
