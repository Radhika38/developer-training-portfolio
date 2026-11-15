const patientName = "Radhika";
const consultationFee = 500;
const medicineCharges = 800;
const labTestCharges = 300;
const discount = 100;
const totalBill = consultationFee + medicineCharges + labTestCharges;
const finalBill = totalBill - discount;

console.log("===== PATIENT BILL =====");
console.log("Patient Name:", patientName);
console.log("Consultation Fee: ₹", consultationFee);
console.log("Medicine Charges: ₹", medicineCharges);
console.log("Lab Test Charges: ₹", labTestCharges);
console.log("Total Bill: ₹", totalBill);
console.log("Discount: ₹", discount);
console.log("Final Bill: ₹", finalBill);
