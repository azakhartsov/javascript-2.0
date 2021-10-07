class Valid {
  constructor(email, password, isValid = false) {
    this.email = email;
    this.password = password;
    this.isValid = isValid;
  }
  validate() {
    if (this.password.length < 6) this.isValid = false;
    else this.isValid = true;
    return this.isValid;
  }
}
