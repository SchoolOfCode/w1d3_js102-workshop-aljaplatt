// let attempts = 0;

// while (attempts < 3) {
//   let password = prompt("please enter the password");
//   // - Check whether the password matches the correct password:
//   if (password === "abc") {
//     //   - If it does, reveal the information.
//     alert("secret info");
//   } else {
//     //   - If it doesn't, let them try again.
//     attempts++;
//   }
// }
// //   - If they fail three times in a row, do not allow them any more tries.

// function authenticateUser() {
//   let attempts = 0;

//   while (attempts < 3) {
//     let password = prompt("please enter the password");
//     // - Check whether the password matches the correct password:
//     if (password === "abc") {
//       //   - If it does, reveal the information.
//       return console.log("secret info");
//     } else {
//       //   - If it doesn't, let them try again.
//       attempts++;
//       alert(`You have ${3 - attempts} left.`);
//     }
//   }
//   //   - If they fail three times in a row, do not allow them any more tries.
// }

// let isLoggedIn = authenticateUser();

function authenticateUser() {
  let attempts = 0;
  while (attempts < 3) {
    let password = prompt("Please enter you're password");
    if (password === "abc") {
      return console.log("Secret info");
    } else {
      attempts++;
      alert(`You have ${3 - attempts} left.`);
    }
  }
}

let isLoggedin = authenticateUser();
