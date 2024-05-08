import { hash } from "bcrypt";

export async function hashPassword(password) {
  const hashPassword = await hash(password, 12);
  return hashPassword;
}

export async function verifyPassword(password, hashedPassword) {
  const isValid = await compare(password, hashPassword);
  return isValid;
}