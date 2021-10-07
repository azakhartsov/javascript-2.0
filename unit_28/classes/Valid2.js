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
    if (this.email == "") {
      this.isValid = false;
      this.emaiError = "email empty";
      return this.emaiError;
    }
    if (this.password.length < 6) {
      this.passwordError = "min length 6";
      return this.passwordError;
    }
  }
}
