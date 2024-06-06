export const checkValidData = (email, password, name) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  const isNameValid=/^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is Not Valid";
    if(!isNameValid) return "Name is not valid";

    return null;
};


export const checkValidDat_signin = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);


    if(!isEmailValid) return "Email ID is not valid";
    if(!isPasswordValid) return "Password is Not Valid";

    return null;
};