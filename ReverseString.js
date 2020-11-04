//Reverse the string using the javascript
//dont use the reverse method

// for example input string is "y" then we have to put a check for it
// TO put a check for whethr the input is undefined
//to put a check fot input is no or not

function reverse(str) {
  //Lets check the input
  if (!str || str.length < 2 || typeof str !== "string") {
    return console.log("Hmm This is not the string");
  } else {
    //will make a empty array
    console.log(str);
    let reversed = [];
    //we will reverse loop over the input string and push the each item into
    // the new created array and will use a join method on it.
    // join () method return the array as a string

    const itemlength = str.length - 1;

    for (i = itemlength; i >= 0; i--) {
      reversed.push(str[i]);
    }
    console.log(reversed);
  }
}

reverse("pratik");

// input is  "Pratik"
// itemlength = 5
// reversed = [k i t a r  p]
//using join "kitarp"
