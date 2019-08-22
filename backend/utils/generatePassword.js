import { hash, genSalt, compareSync } from 'bcrypt';

class Password {
  static async generatePassword(data) {
    const salt = await (0, genSalt)(10);
    const newPassword = await hash(data.password, salt);
    return newPassword;
  }

  static async checkPasswordMatch(hashedPassword, password) {
    return compareSync(password, hashedPassword);
  }
}
export default Password;
