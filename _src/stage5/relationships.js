function getRelationship(x, y) {
    // Your code goes here!
    if (isNaN(x) && isNaN(y)){
    	return "Can't compare relationships because "+x+" and "+y+" are not numbers.";
    }
    if (isNaN(x)){
    	return "Can't compare relationships because "+x+" is not a number.";
    }
    if (isNaN(y)){
    	return "Can't compare relationships because "+y+" is not a number.";
    }
    if (x < y){
    	return "<";
    }
    if (x === y){
    	return "=";
    }
    if (x > y){
    	return ">";
    }
    return "0";
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this"," something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));