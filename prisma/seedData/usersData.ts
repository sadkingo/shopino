import { UserRole } from '@prisma/client';

const users = [{
  email: "dev@example.com",
  password: "dev123",
  name: "Developer",
  role: UserRole.ADMIN,
  phone: "1234567890",
  address: "123 Main St",
}, {
  email: "admin@example.com",
  password: "admin123",
  name: "Admin",
  role: UserRole.ADMIN,
  phone: "9876543210",
  address: "456 Elm St",
}, {
  email: "user@example.com",
  password: "user123",
  name: "User",
  role: UserRole.USER,
  phone: "0987654321",
  address: "789 Oak St",
}]

export { users };