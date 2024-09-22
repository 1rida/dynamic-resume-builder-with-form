// Interface for Resume data structure
interface ResumeData {
    fullName: string;
    email: string;
    phone: string;
    degree: string;
    school: string;
    workExperience: string;
    skills: string;
}

// Function to gather data from the form inputs
function gatherFormData(): ResumeData {
    const fullName = (document.getElementById("fullName") as HTMLInputElement).value;
    const email = (document.getElementById("email") as HTMLInputElement).value;
    const phone = (document.getElementById("phone") as HTMLInputElement).value;
    const degree = (document.getElementById("degree") as HTMLInputElement).value;
    const school = (document.getElementById("school") as HTMLInputElement).value;
    const workExperience = (document.getElementById("workExperience") as HTMLTextAreaElement).value;
    const skills = (document.getElementById("skills") as HTMLTextAreaElement).value;

    return {
        fullName,
        email,
        phone,
        degree,
        school,
        workExperience,
        skills
    };
}

// Function to display the resume
function displayResume(data: ResumeData) {
    const resumeSection = document.getElementById("resumeOutput");
    
    if (resumeSection) {
        resumeSection.innerHTML = `
            <h2>Resume</h2>
            <p><strong>Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Degree:</strong> ${data.degree}</p>
            <p><strong>School:</strong> ${data.school}</p>
            <p><strong>Work Experience:</strong> ${data.workExperience}</p>
            <p><strong>Skills:</strong> ${data.skills}</p>
        `;
    }
}

// Function to handle the resume creation process
function createResume() {
    const formData = gatherFormData();
    if (validateFormData(formData)) {
        displayResume(formData);
    } else {
        alert("Please fill out all fields.");
    }
}

// Form validation
function validateFormData(data: ResumeData): boolean {
    return Object.values(data).every(value => value.trim() !== "");
}

// Add event listener to the button
const createResumeBtn = document.getElementById("createResumeBtn");
if (createResumeBtn) {
    createResumeBtn.addEventListener("click", createResume);
}
