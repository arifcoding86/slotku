document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value;

  const data = localStorage.getItem(username);
  if (!data) {
    document.getElementById("loginMessage").textContent = "❌ Username tidak ditemukan!";
    return;
  }

  const user = JSON.parse(data);
  if (user.password !== password) {
    document.getElementById("loginMessage").textContent = "❌ Password salah!";
    return;
  }

  localStorage.setItem("loggedInUser", username);
  window.location.href = "game.html";
});
