import User from "./user.model";

export const createUserToDb = async () => {
  const user = await new User({
    id: "69love",
    role: "Student",
    name: {
      firstName: "Mr. Fury",
      middleName: "islam",
      lastName: "Fury",
    },
    password: "jani na",
    gender: "male",
    email: "loveyouoishy@gmail.com",
    contactNumber: "012378209",
    presentAddress: "Ishurdi",
    parmanentAddress: "Jannah",
  });
  await user.save();
  console.log(user);
};
