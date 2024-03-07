import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "latest36",
    role: "Student",
    name: {
      firstName: "Mr. Test",
      middleName: "islam",
      lastName: "Fury",
    },
    password: "jani na je",
    gender: "male",
    email: "loveyouoishy@gmail.com",
    contactNumber: "012378209",
    presentAddress: "Ishurdi",
    parmanentAddress: "Jannah",
  });
  await user.save();
  return user;
};

export const getUsersFromDb = async () => {
  const users = await User.find();
  return users;
};
