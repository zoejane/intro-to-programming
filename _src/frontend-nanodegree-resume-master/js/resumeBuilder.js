var bio = {
    "name": "Zoe Jane",
    "role": "Learner",
    "welcomeMessage": "Hello world!",
    "biopic": "images/me.png",
    "contacts": {
        "mobile": "123456",
        "email": "dadac123@gmail.com",
        "github": "zoejane",
        "twitter": "@dadac123",
        "blog": "http://zoejane.net/",
        "location": "China"
    },
    "skills": ["programming", "writing", "music"]
};

bio.display = function() {
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),
                             HTMLemail.replace("%data%", bio.contacts.email),
                             HTMLtwitter.replace("%data%", bio.contacts.twitter),
                             HTMLgithub.replace("%data%", bio.contacts.github),
                             HTMLblog.replace("%data%", bio.contacts.blog),
                             HTMLlocation.replace("%data%", bio.contacts.location));

    // add footerContacts at the bottome of the page.
    $("#footerContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile),
                                HTMLemail.replace("%data%", bio.contacts.email),
                                HTMLtwitter.replace("%data%", bio.contacts.twitter),
                                HTMLgithub.replace("%data%", bio.contacts.github),
                                HTMLblog.replace("%data%", bio.contacts.blog),
                                HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic),
                        HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

    // if skills exist, then add skills part.
    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        bio.skills.forEach(function(skill) {
            var formattedSkill = HTMLskills.replace("%data%", skill);
            $("#skills").append(formattedSkill);
        });
    }

};
bio.display();

var education = {
    "schools": [{
        "name": "CSUST",
        "location": "Changsha, China",
        "degree": "Master",
        "dates": "2013",
        "major": ["GIS", "Finance"]
    }],
    "onlineCourses": [{
        "title": "Intro to Programming",
        "school": "Udacity",
        "dates": "2016",
        "url": "http://www.udacity.com"
    }]
};

education.display = function() {
    education.schools.forEach(function(school) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLschoolName.replace("%data%", school.name),
                                          HTMLschoolDegree.replace("%data%", school.degree),
                                          HTMLschoolDates.replace("%data%", school.dates),
                                          HTMLschoolLocation.replace("%data%", school.location),
                                          HTMLschoolMajor.replace("%data%", school.major));
    });

    // if onlineCourses exist, add it.
    if (education.onlineCourses.length > 0) {
        $("#education").append(HTMLonlineClasses);
    }
    education.onlineCourses.forEach(function(online) {
        $("#education").append(HTMLschoolStart);

        $(".education-entry:last").append(HTMLonlineTitle.replace("%data%", online.title),
                                          HTMLonlineSchool.replace("%data%", online.school),
                                          HTMLonlineDates.replace("%data%", online.dates),
                                          HTMLonlineURL.replace("%data%", online.url));
    });

};
education.display();

var work = {
    "jobs": [{
        "employer": "Udacity",
        "title": "Course Developer",
        "location": "Mountain View, CA",
        "dates": "Feb 2014 - Current",
        "description": "Who moved my cheese cheesy feet cauliflower cheese."
    }, {
        "employer": "LearnBIG",
        "title": "Software Engineer",
        "location": "Seattle, WA",
        "dates": "May 2013 - Jan 2014",
        "description": "Who moved my cheese cheesy feet cauliflower cheese."
    }, {
        "employer": "LEAD Academy Charter High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jul 2012 - May 2013",
        "description": "Who moved my cheese cheesy feet cauliflower cheese."
    }, {
        "employer": "Stratford High School",
        "title": "Science Teacher",
        "location": "Nashville, TN",
        "dates": "Jun 2009 - Jun 2012",
        "description": "Who moved my cheese cheesy feet cauliflower cheese."
    }]
};

work.display = function() {
    work.jobs.forEach(function(job) {
        $("#workExperience").append(HTMLworkStart);

        var formattedEmployer = HTMLworkEmployer.replace("%data%", job.employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", job.title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedLocation = HTMLworkLocation.replace("%data%", job.location);
        var formattedDates = HTMLworkDates.replace("%data%", job.dates);
        var formattedDescription = HTMLworkDescription.replace("%data%", job.description);
        $(".work-entry:last").append(formattedLocation, formattedDates, formattedDescription);
    });

};

work.display();

var project = {
    "projects": [{
        "title": "Movie Website",
        "dates": "2016",
        "description": "Using Python and HTML/CSS",
        "images": ["images/project1.jpg", "images/project1.jpg"]
    }, {
        "title": "Resume",
        "dates": "2016",
        "description": "Using JavaScript",
        "images": ["images/project2.jpg"]
    }]

};

projects.display = function() {
    project.projects.forEach(function(project_index) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", project_index.title);
        var formattedDates = HTMLprojectDates.replace("%data%", project_index.dates);
        var formattedDescription = HTMLprojectDescription.replace("%data%", project_index.description);

        $(".project-entry:last").append(formattedTitle, formattedDates, formattedDescription);

        if (project_index.images.length > 0) {
            project_index.images.forEach(function(image) {
                var formattedImage = HTMLprojectImage.replace("%data%", image);
                $(".project-entry:last").append(formattedImage);
            });
        }
    });
};

projects.display();

// code for internationalizeButton
function inName(oldName) {
    var finalName = oldName;
    position = finalName.search(' ');
    finalName = finalName[0].toUpperCase() +
        finalName.slice(1, position).toLowerCase() +
        finalName.slice(position).toUpperCase();
    return finalName;
}
$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);

// add navigation
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}