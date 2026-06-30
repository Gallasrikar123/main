import { db } from "./db.js";
import * as schema from "./schema.js";

async function seed() {
  // Add a user
  await db.insert(schema.usersTable).values({
  name: "John",
  email: "john@example.com",
  password: "password123",
  phone: "9876543210",
  address: "New York"
});
  // Add a restaurant
  await db.insert(schema.restaurantsTable).values({
    name: "Pizza Palace",
    address: "123 Main Street",
    cuisine: "Italian",
    rating: "4.50",
    isOpen: true,
});

  console.log("Seeding done!");
  process.exit(0);
}

seed();
