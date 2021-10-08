class Valid2 extends Valid {
  constructor(
    email,
    password,
    isValid = false,
    emaiError = "",
    passwordError = ""
  ) {
    super(email, password, (isValid = false));
    this.emaiError = emaiError;
    this.passwordError = passwordError;
  }

  validate() {
    super.validate();
    if (!this.isValid) {
      this.passwordError = "min length 6";
      return false;
    }
    if (this.email == "") {
      this.isValid = false;
      this.emaiError = "email empty";
      return false;
    }
    this.isValid = true;
    return true;
  }
}
