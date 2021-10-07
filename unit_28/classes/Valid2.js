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
    let out = "";
    if (this.email == "") {
      this.isValid = false;
      this.emaiError = "email empty";
      out += this.emaiError + ", ";
    }
    if (this.password.length < 6) {
      this.passwordError = "min length 6";
      out += this.passwordError;
    }
    return out;
  }
}
