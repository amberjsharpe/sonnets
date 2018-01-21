var shakespeare = document.getElementById("sonnet").innerHTML;

// Find and output position of "orphans"
var noParents = shakespeare.indexOf("orphans");
console.log(noParents);

// Output total num of characters
var numChars = shakespeare.length;
console.log(numChars);

// Replace first "winter" with "yuletide"
shakespeare = shakespeare.replace("winter", "yuletide");
console.log(shakespeare);

// Replace all "the" with "a large"
shakespeare = shakespeare.replace(/the/gi, "a large");
console.log(shakespeare);

//Set content of sonnet div w/ new string
shakespeare = document.getElementById("sonnet2").innerHTML;

