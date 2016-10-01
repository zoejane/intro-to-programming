/*
This is empty on purpose! Your code to build the resume will go here.
 */
// $("#main").append("Zoe Jane");

/*
var firstName = 'james';
var age = 32;
console.log(firstName);

var awesomeThoughts = 'I am Zoe Jane and I am AWESOME!';
console.log(awesomeThoughts);

var email = 'cameron@udacity.com';
var newEmail = email.replace('udacity', 'gmail');

console.log(email);
console.log(newEmail);

var funThoughts = awesomeThoughts.replace('AWESOME', 'FUN');
console.log(funThoughts);

$('#main').append(funThoughts);

name = "Zoe Jane";
var formattedName = HTMLheaderName.replace("%data%", name);


role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);

var skills = ["awesomeness", "programming", "teaching", "JS"];

$("#main").append(skills[0]);
$("#main").append(skills.length);

var bio_me = {
	"name" : "Zoe Jane",
	"role" : "programmer",
	"contact info" : "dadac123@gmail.com",
	"picture URL" : "images/me.png",
	"welcome message" :"Hello world!",
 	"skills" : skills
};

$("#main").append(bio_me.name);

var bio = {
	"name": "John Doe",
	"role": "Web Developer",
	"contacts": {
		"mobile": "650-555-5555",
		"email": "john@example.com",
		"github": "johndoe",
		"twitter": "@johndoe",
		"location": "San Fracisco"
	},
	"welcomeMessage": "lorem ipsum dolor sit amet etc etc etc.",
	"skills": [
		"awesomeness", "delivering things", "cryogenic sleep", "saving the universe"
	],
	"bioPic": "images/fry.jpg"
};

bio.city = "Mountain View";
bio["email"] = "james.williams@udacity.com";

$("#main").append(bio.city);
$("#main").append(bio["email"]);

var work_me = {
	"position" : "learner",
	"employer" : "Udacity",
	"yearsWorked" : 0
};

work_me.cityOfBusiness = "Zhuzhou";

var education_me = {};

education_me["name"] = "CSUST";
education_me["yearsAttend"] = 3;
education_me["schoolCity"] = "Changsha";
education_me.major = "GIS";
education_me.minors = "Finance";
education_me.graduationYears = 2013;
education_me.onlineCourses = "Udacity";

$("#main").append(work_me.position);
$("#main").append(education_me["name"]);
$("#main").append(education_me.major);

var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.years = 0.3;

var education = {};
education["name"] = "Nova Southeastern University";
education["years"] = "2005-2013";
education["city"] = "Fort Lauderdale, FL, US";

$("#main").append(work["position"]);
$("#main").append(education.name);

var education = {
	"schools": [
	{
		"name": "Eckerd College",
		"city": "Sanit Petersburg, FL, US",
		"degree": "BA",
		"major": ["CompSci", "French"],
		"dates":2013,
		"url":"http://example.com"
	},
	{
		"name": "Nova Southeastern University",
		"city": "Fort Lauderdale, FL, US",
		"degree": "Masters",
		"major": ["CompSci"],
		"dates":2013,
		"url":"http://example.com"
	}
	],
	"onlineCourses": [
	{
		"title": "JavaScript Syntax",
		"school": "Udacity",
		"dates": 2014,
		"url": "http://www.udacity.com/course/ud804"
	}
	]
}
 */


/*
var awesomeThoughts = "I am Zoe Jane and I am AWESOME!"
console.log(awesomeThoughts);

var email = "cameron@udacity.com";
var newEmail = email.replace("udacity","gmail");
console.log(newEmail);

var funThoughts = awesomeThoughts.replace("AWESOME","FUN");
$("#main").append(funThoughts);

name = "Zoe";
var formattedName = HTMLheaderName.replace("%data%", name);
$("#header").append(formattedName);

role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%", role);
$("#header").append(formattedRole);

var skills =
["awesomeness", "programming", "teaching", "JS"];
$("#main").append(skills);

var bio = {
	"name": "Zoe",
	"role": "Developer",
	"contacts":{
		"mobile": "123456789",
		"email": "dadac123@gmail.com"
	},
	"skills": skills
};

$("#main").append(bio.role);

var work = {};
work.position = "Course Developer";
work.employer = "Udacity";
work.year = 0.3;

$("#main").append(work.position);

var education = {
	"schools": [
	{
		"name": "Eckerd College",
		"major": ["CompSci", "French"]
	},
	{
		"name": "Nova Southeastern University",
		"major": ["CompSci"]
	}],
	"onlineCourses":[
	{
		"name": "Udacity"
	}
	]
}

$("#main").append(education.schools[0].name);
$("#main").append(education.onlineCourses[0].name);
*/

/*
var work = {
 	"jobs": [
 	{
 		"employer": "Udacity",
 		"title": "learner",
 		"location": "online",
 		"dates":2016,
 		"description": "Learning at Udacity"
 	},
 	{
 		"employer": "Udacity",
 		"title": "thinker",
 		"location": "online",
 		"dates":2016,
 		"description": "Learning at Udacity"
 	}
 	]
 }
*/
var work = {
  "jobs": [
    {
      "employer": "Udacity",
      "title": "Course Developer",
      "location": "Mountain View, CA",
      "dates": "Feb 2014 - Current",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LearnBIG",
      "title": "Software Engineer",
      "location": "Seattle, WA",
      "dates": "May 2013 - Jan 2014",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "LEAD Academy Charter High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jul 2012 - May 2013",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    },
    {
      "employer": "Stratford High School",
      "title": "Science Teacher",
      "location": "Nashville, TN",
      "dates": "Jun 2009 - Jun 2012",
      "description": "Who moved my cheese cheesy feet cauliflower cheese. Queso taleggio when the cheese comes out everybody's happy airedale ricotta cheese and wine paneer camembert de normandie. Swiss mozzarella cheese slices feta fromage frais airedale swiss cheesecake. Hard cheese blue castello halloumi parmesan say cheese stinking bishop jarlsberg."
    }
  ]
};

var project = {
 	"projects": [
 	{
 		"title": "Movie Website",
 		"dates":2016,
 		"description": "Using Python and HTML/CSS",
 		"images": ["images/project1.jpg"]
 	},
 	{
 		"title": "Resume",
 		"dates": 2016,
 		"description": "Using JavaScript",
 		"images": ["images/project2.jpg"]
 	}
 	]

 }

var bio = {
 	"name": "Zoe Jane",
 	"role": "learner",
 	"welcomeMessage": "Hello world!",
 	"biopic": "images/me.png",
 	"contacts": {
 		"mobile":"123456",
 		"email": "dadac123@gmail.com",
 		"github": "zoejane",
 		"twitter": "@dadac123",
 		"location":  "China"
 	},
 	"skills": ["programming","writing","music"]
 }

var education = {
 	"schools": [
 	{
 		"name": "CSUST",
 		"location": "Changsha, China",
 		"degree dates":2013,
 		"url": "http://example.com",
 		"major":["GIS","Finance"]
 	}
 	],
 	"onlineCourses": [
 	{
 		"title":"Intro to Programming",
 		"school":"Udacity",
 		"dates":2016,
 		"url": "http://www.udacity.com"
 	}
 	]
 }

var formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

if(bio.skills.length > 0) {
	
	$("#header").append(HTMLskillsStart);

	var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
	$("#skills").append(formattedSkill);

	formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
	$("#skills").append(formattedSkill);
 }

/*
var cameron = {};
cameron.job = "course dev";

var makeCourse = function(){
	// make a course
	console.log("Made a course");
}

var courses = 0;
while(cameron.job === "course dev"){
	makeCourse();
	courses = courses + 1;
	if(courses === 10){
		cameron.job = "learning specialist";
	}

}console.log(cameron.job);

for(var i=0; i<9; i++){
	console.log(i);
}

var countries = ["Germany", "Brazil", "China"];
for(country in countries){
	console.log(countries[country]);
}
*/

function displayWork(){
for(job in work.jobs){
	console.log(work.jobs[job].title);
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[job].location);
	var formattedDates = HTMLworkDates.replace("%data%",work.jobs[job].dates);
	var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[job].description);

	$(".work-entry:last").append(formattedLocation);
	$(".work-entry:last").append(formattedDates);
	$(".work-entry:last").append(formattedDescription);
}

}

displayWork();

$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

function locationizer(work_obj){
	var locationArray = [];

	for (job in work_obj.jobs){
		var newLocation = work_obj.jobs[job].location;
		locationArray.push(newLocation);
	}

	return locationArray;
}

console.log(locationizer(work));

var name = bio.name;

function inName(oldName) {
    var finalName = oldName;
    // Your code goes here!
    position = finalName.search(' ')
    //console.log(position)
    finalName = finalName[0].toUpperCase()
    +finalName.slice(1,position).toLowerCase()
    +finalName.slice(position).toUpperCase()

    return finalName;
};

$("#main").append(internationalizeButton);