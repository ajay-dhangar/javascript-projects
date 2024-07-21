document.getElementById("calculateBtn").addEventListener("click", function () {
  const dob = document.getElementById("dob").value;
  const ageSpan = document.getElementById("age");
  const resultDiv = document.getElementById("result");

  if (dob) {
    const dobDate = new Date(dob);
    const age = calculateAge(dobDate);
    ageSpan.textContent = age;

    resultDiv.style.display = "block";
    resultDiv.classList.add("animate");
  } else {
    alert("Please enter your date of birth");
  }
});

function calculateAge(dob) {
  const diffMs = Date.now() - dob.getTime();
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}