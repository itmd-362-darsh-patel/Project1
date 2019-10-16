var phone = document.getElementById("phone_num").value;
submitOk = "true";

if (phone.length < 10) {
  alert("Phone number needs to be 10 digits");
  submitOk = "false";
}