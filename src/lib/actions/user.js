import User from "../models/user.model";
import { connect } from "../mongodb/mongoose";

export const getUserByClerkId = async (clerkId) => {
  await connect();

  const user = await User.findOne({ clerkId });
  return user;
};

export const createOrUpdateUser = async (
  id,
  first_name,
  last_name,
  image_url,
  email_addresses,
  username
) => {
  await connect();

  try {
    const user = await User.findOneAndUpdate(
      { clerkId: id },
      {
        $set: {
          firstName: first_name,
          lastName: last_name,
          username: username,
          avatar: image_url,
          email: email_addresses[0].email_address,
        },
      },
      { new: true, upsert: true } //if user not found, create a new user
    );
    return user;
  } catch (error) {
    console.error("Error creating or updating user:", error);
  }
};

export const deleteUser = async (id) => {
  await connect();
  try { 
    await User.deleteOne({ clerkId: id });
  } catch (error) {
    console.error("Error deleting user:", error);
  }
};
