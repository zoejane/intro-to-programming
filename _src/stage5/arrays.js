/*
To alphabetize them, it would make sense to write their names as lastname, firstname. 
For example: Neil Armstrong becomes Armstrong, Neil.

Finish the alphabetizer(_names) function, 
which takes in a names array (of length N) containing strings of names 
and returns an alphabetized array of names in lastname, firstname format.
*/

var moonWalkers = [
  "Neil Armstrong",
  "Buzz Aldrin",
  "Pete Conrad",
  "Alan Bean",
  "Alan Shepard",
  "Edgar Mitchell",
  "David Scott",
  "James Irwin",
  "John Young",
  "Charles Duke",
  "Eugene Cernan",
  "Harrison Schmitt"
];

function alphabetizer(names) {
    // Your code goes here!
    newNameArray = [];
    for (var name in names){
    	oldName=names[name];
    	oldName = oldName.split(" ");
    	newName=oldName[0]+", "+oldName[1];
    	newNameArray.push(newName);
    }
        return newNameArray.sort();
}

// Try logging your results to test your code!
console.log(alphabetizer(moonWalkers));