document.addEventListener("DOMContentLoaded", () => {
  const startTime = Date.now();
  const challenge = document.createElement("div");
  challenge.innerHTML = `
    <h1>LuxProtect Verification</h1>
    <p>Potvrdi da nisi bot klikom ispod</p>
    <button id="verify">Nisam Bot</button>
  `;
  const container = document.getElementById("luxprotect");
  container.appendChild(challenge);

  document.getElementById("verify").onclick = () => {
    const endTime = Date.now();
    const duration = endTime - startTime;

    const ua = navigator.userAgent.toLowerCase();
    const suspiciousUAs = ['curl', 'wget', 'python', 'bot', 'crawler'];

    let botDetected = suspiciousUAs.some(s => ua.includes(s));

    if (duration < 500) botDetected = true;

    if (botDetected) {
      alert("Pristup odbijen. Detektovan sumnjiv korisnik/bot.");
      container.innerHTML = "<h2>Pristup odbijen.</h2>";
    } else {
      container.remove();
      document.getElementById("main-content").style.display = "block"; // prikazuje pravi sadržaj
    }
  };
});