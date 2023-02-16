function convert() {
  const inches = document.getElementById("inches").value;
  const centimeters = inches * 2.54;
  document.getElementById("result").innerHTML = `${inches} inches is equal to ${centimeters} centimeters.`;
}
