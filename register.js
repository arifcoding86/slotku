document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value;

  if (!username || !email || !phone || !password) {
    document.getElementById("registerMessage").textContent = "⚠️ Semua kolom wajib diisi!";
    return;
  }

  if (localStorage.getItem(username)) {
    document.getElementById("registerMessage").textContent = "❌ Username sudah terdaftar!";
    return;
  }

  const user = { username, email, phone, password };
  localStorage.setItem(username, JSON.stringify(user));

  document.getElementById("registerMessage").style.color = "#00cec9";
  document.getElementById("registerMessage").textContent = "✅ Registrasi berhasil! Mengalihkan ke login...";

  setTimeout(() => {
    window.location.href = "index.html";
  }, 1500);
});
