document.addEventListener("DOMContentLoaded", () => {
  const startTime = Date.now();
  const challenge = document.createElement("div");
  challenge.innerHTML = `
    <h1>LuxProtect Verification</h1>
    <p>Confirm you are not a bot by clicking below</p>
    <button id="verify">I am not a bot.</button>
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
      alert("Access denied. Suspicious user/bot detected.");
      container.innerHTML = "<h2>Access denied</h2>";
    } else {
      container.remove();
      document.getElementById("main-content").style.display = "block"; // prikazuje pravi sadržaj
    }
  };
});
