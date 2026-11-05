const profileData = {
  firstName: "Precious",
  lastName: "Moses",
  age: 31,
  cityOfResidence: "Manchester",
};
const twinData = profileData;
twinData.firstName = "Emilia";
console.log(profileData === twinData);
console.log(profileData.firstName);
