"use server";

import connectDB from "@/lib/config/connectDB";
import { User } from "@/lib/models/userModel";
import { redirect } from "next/navigation";
import { hash } from "bcryptjs";

const register = async formData => {
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  // Check for missing fields
  if (!username || !email || !password) {
    console.log("Missing Fields");
    return; // Exit the function early if any field is missing
  }

  try {
    await connectDB(); // Ensure the database is connected

    // Check if the user already exists
    const exists = await User.findOne({ email });
    if (exists) {
      console.log("User Exists");
      return; // Exit the function early if the user already exists
    }

    const hashedPassword = await hash(password, 10);

    // Create the new user
    await User.create({ username, email, password: hashedPassword });
    console.log("User Created");
    
  } catch (error) {
    console.error("Error during registration:", error);
    // Handle the error appropriately (e.g., return an error response, show a message to the user, etc.)
  }
};

export { register };
