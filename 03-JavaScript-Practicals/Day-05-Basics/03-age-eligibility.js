const patientName = "Radhika";
const patientAge = 21;

console.log("===== PATIENT ELIGIBILITY =====");
console.log("Patient:", patientName);
console.log("Age:", patientAge);

if (patientAge >= 18) {
    console.log("Status: Adult");
    console.log("Appointment: Eligible");
} else {
    console.log("Status: Minor");
    console.log("Appointment: Guardian required");
}
