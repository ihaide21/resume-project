
var name = "Irfan Haider";
var formattedname = HTMLheaderName.replace("%data%", name); 

var role = "Product Manager";
var formattedRole= HTMLheaderRole.replace("%data%", role);

$("#header").prepend(formattedRole);
$("#header").prepend(formattedname);


var email="ihaide21@helpsyhelp.com"; 
var formattedemail=HTMLemail.replace("%data%", email);
$("#topContacts").append(formattedemail);
var twitter="@bambam";
var formattedtwitter=HTMLtwitter.replace("%data%", twitter);
$("#topContacts").prepend(formattedtwitter);



var institution ="Mercyhurst"
var formattedinstitution=HTMLschoolName.replace("%data%", institution);
$("#education").append(formattedinstitution);


var skills=
["python", " HTML", " Css"];



var bio = {
	"name" : "Mr. Irfan haider", 
	"role" : "no current role", 
	"contacts": {
		"email": "ihaide22@gmail.com", 
		"phone": "123-123-4563", 
		"location": "San Francisco"
	},
	"WelcomeMessage": "please enjoy the website.", 
	"skills" : skills
}; 


//SKILLS
if(bio.skills.length > 0){
	$("#header").append(HTMLskillsStart);

	HTMLskills = HTMLskills.replace("%data%", skills);
	$("#header").append(HTMLskills);

	//var formatedSkill =HTMLskills.replace("%data%", bio.skills[0]);
	//$("#skills").append(formattedSkill);

//	formattedSkill=HTMLskills.replace("%data%", bio.skills[1]);
//	$("#skills").append(formattedSkill);

//	formattedSkill=HTMLskills.replace("%data%", bio.skills[2]);
//	$("skills").append(formattedSkill);
}


var work = {
	"jobs": [
		{ 
			"employer": "Levin Simes",
			"title": " Research Analyst", 
			"location": "San Francisco",
			"datesworked": "Jan 2013 - Present",
			"description": "Currently work with pharmaceutical companies"
		}, 
		{
			"employer": "Genentech",
			"title": "Manager", 
			"location": "Palo Alto",
			"datesworked": "Jan 2010 - Present",
			"description": "Worked as an Equipment Technician"
		}
	]
}

function displayWork() {
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);

	var formattedEmployer =HTMLworkEmployer.replace("%data%", work.jobs[job].employer); 
	var formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[job].title);
	
	var formattedEmployerTitle = formattedEmployer + formattedTitle 
	$(".work-entry:last").append(formattedEmployerTitle);

	var formattedlocation=HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedlocation);

	var formatteddatesworked=HTMLworkDates.replace("%data%", work.jobs[job].datesworked);
	$(".work-entry:last").append(formatteddatesworked);

	var fromattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(fromattedDescription);
}
}
displayWork()


function locationizer(work_obj) {
	var locationArray = [];
	for (job in work_obj.jobs) {
		var newLocation = work_obj.jobs[job].location; 
		locationArray.push(newLocation);
	}
	return locationArray;
}
console.log(locationizer(work));


var education = {}; 
education.degree = "Biology"; 
education.college="Mercyhurst University";
education.duration="4 years";
education.location="Erie"
$("#education").append(education.degree);
$("#education").append(education.college);

//CLICK Values
$(document).click(function(loc) {
	var x = loc.pageX;
	var y = loc.pageY; 

	logClicks(x,y);
});

console.log(Locationfinder);
$("#mapDiv").append(googleMap);


var projects = {
	"projects": [
		{
			"title": "Interactive resume project",
			"date": "2016",
			"description": "Created an interactive resume with Javascript.",
			//"images": [
			//	"images/resume_project.png",
			//	"images/udacity_project.png"
			//]
		},
		{
			"title": "Sample project 1",
			"date": "2015",
			"description": "Created an interactive sample website.",
			//"images": [
			//	"images/resume_project.png",
			//	"images/udacity_project.png"
			//]
		}
	]	
};


function displayProjects() {
//projects.display = function() {
for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);

	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);

	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].date);
	$(".project-entry:last").append(formattedDates);

	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);

		//if (projects.projects[entry].images.length > 0) {
		//	for (image in projects.projects[entry].images) {
		//		var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[entry].images[image]);
		//		$(".project-entry:last").append(formattedImage);
		//	}
		//}	
	}
}

displayProjects()
