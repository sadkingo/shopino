import bcrypt from 'bcryptjs';

function hashPassword(password: string) {
  return bcrypt.hashSync(password, 10);
}

export default hashPassword;