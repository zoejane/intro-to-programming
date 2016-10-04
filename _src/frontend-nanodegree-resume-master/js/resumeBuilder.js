var bio = {
	"name": "Zoe Jane",
	"role": "Learner",
	"welcomeMessage": "Hello world!",
	"biopic": "images/me.png",
	"contacts": {
		"mobile":"123456",
		"email": "dadac123@gmail.com",
		"github": "zoejane",
		"twitter": "@dadac123",
		"blog": "http://zoejane.net/",
		"location":  "China"
	},
	"skills": ["programming","writing","music"]
}

bio.display = function(){
	var formattedRole = HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	var formattedName = HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	
	$("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#topContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#topContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
	$("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
	$("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
	$("#footerContacts").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
	$("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
	$("#footerContacts").append(HTMLblog.replace("%data%",bio.contacts.blog));
	$("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));

	$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));

	if(bio.skills.length > 0) {
		
		$("#header").append(HTMLskillsStart);

		var formattedSkill = HTMLskills.replace("%data%",bio.skills[0]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[1]);
		$("#skills").append(formattedSkill);
		formattedSkill = HTMLskills.replace("%data%",bio.skills[2]);
		$("#skills").append(formattedSkill);
	 }
}
bio.display();

var education = {
	"schools": [
	{
		"name": "CSUST",
		"location": "Changsha, China",
		"degree":"Master",
		"dates": "2013",
		"major":["GIS","Finance"]
	}
	],
	"onlineCourses": [
	{
		"title":"Intro to Programming",
		"school":"Udacity",
		"dates":"2016",
		"url": "http://www.udacity.com"
	}
	]
}

education.display = function(){
	for (school in education.schools){
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[school].name));
		$(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[school].major));
	}

	if (education.onlineCourses.length > 0 ){
		$("#education").append(HTMLonlineClasses);
	}
	for (online in education.onlineCourses){
		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[online].title));
		$(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[online].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[online].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%",education.onlineCourses[online].url));
	}
	
}	
education.display();

var work = {
	"jobs": [
	{
		"employer": "Udacity",
		"title": "Course Developer",
		"location": "Mountain View, CA",
		"dates": "Feb 2014 - Current",
		"description": "Who moved my cheese cheesy feet cauliflower cheese."
	},
	{
		"employer": "LearnBIG",
		"title": "Software Engineer",
		"location": "Seattle, WA",
		"dates": "May 2013 - Jan 2014",
		"description": "Who moved my cheese cheesy feet cauliflower cheese."
	},
	{
		"employer": "LEAD Academy Charter High School",
		"title": "Science Teacher",
		"location": "Nashville, TN",
		"dates": "Jul 2012 - May 2013",
		"description": "Who moved my cheese cheesy feet cauliflower cheese."
	},
	{
		"employer": "Stratford High School",
		"title": "Science Teacher",
		"location": "Nashville, TN",
		"dates": "Jun 2009 - Jun 2012",
		"description": "Who moved my cheese cheesy feet cauliflower cheese."
	}
	]
};

work.display = function(){
	for(job in work.jobs){
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

work.display();

var project = {
	"projects": [
	{
		"title": "Movie Website",
		"dates":"2016",
		"description": "Using Python and HTML/CSS",
		"images": ["images/project1.jpg","images/project1.jpg"]
	},
	{
		"title": "Resume",
		"dates": "2016",
		"description": "Using JavaScript",
		"images": ["images/project2.jpg"]
	}
	]
}

projects.display = function(){
	for (project_index in project.projects){
		$("#projects").append(HTMLprojectStart);

		var formattedTitle = HTMLprojectTitle.replace("%data%",project.projects[project_index].title);
		var formattedDates = HTMLprojectDates.replace("%data%",project.projects[project_index].dates);
		var formattedDescription = HTMLprojectDescription.replace("%data%",project.projects[project_index].description);

		$(".project-entry:last").append(formattedTitle);
		$(".project-entry:last").append(formattedDates);
		$(".project-entry:last").append(formattedDescription);

		if (project.projects[project_index].images.length > 0) {
			for (image in project.projects[project_index].images) {
				var formattedImage = HTMLprojectImage.replace("%data%", project.projects[project_index].images[image]);
				$(".project-entry:last").append(formattedImage);
			}
		}
	}
}

projects.display();

var name = bio.name;
function inName(oldName) {
    var finalName = oldName;
    position = finalName.search(' ')
    finalName = finalName[0].toUpperCase()
    + finalName.slice(1,position).toLowerCase()
    + finalName.slice(position).toUpperCase()
    return finalName;
};

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);