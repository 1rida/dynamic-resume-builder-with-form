// Function to gather data from the form inputs
function gatherFormData() {
    var fullName = document.getElementById("fullName").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var degree = document.getElementById("degree").value;
    var school = document.getElementById("school").value;
    var workExperience = document.getElementById("workExperience").value;
    var skills = document.getElementById("skills").value;
    return {
        fullName: fullName,
        email: email,
        phone: phone,
        degree: degree,
        school: school,
        workExperience: workExperience,
        skills: skills
    };
}
// Function to display the resume
function displayResume(data) {
    var resumeSection = document.getElementById("resumeOutput");
    if (resumeSection) {
        resumeSection.innerHTML = "\n            <h2>Resume</h2>\n            <p><strong>Name:</strong> ".concat(data.fullName, "</p>\n            <p><strong>Email:</strong> ").concat(data.email, "</p>\n            <p><strong>Phone:</strong> ").concat(data.phone, "</p>\n            <p><strong>Degree:</strong> ").concat(data.degree, "</p>\n            <p><strong>School:</strong> ").concat(data.school, "</p>\n            <p><strong>Work Experience:</strong> ").concat(data.workExperience, "</p>\n            <p><strong>Skills:</strong> ").concat(data.skills, "</p>\n        ");
    }
}
// Function to handle the resume creation process
function createResume() {
    var formData = gatherFormData();
    if (validateFormData(formData)) {
        displayResume(formData);
    }
    else {
        alert("Please fill out all fields.");
    }
}
// Form validation
function validateFormData(data) {
    return Object.values(data).every(function (value) { return value.trim() !== ""; });
}
// Add event listener to the button
var createResumeBtn = document.getElementById("createResumeBtn");
if (createResumeBtn) {
    createResumeBtn.addEventListener("click", createResume);
}
