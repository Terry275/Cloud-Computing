function showLogin() {
    document.getElementById("main-content").innerHTML = `
      <h3 class="text-center">Login</h3>
      <form class="w-50 mx-auto">
        <div class="mb-3">
          <label for="login-username" class="form-label">Username</label>
          <input type="text" class="form-control" id="login-username" required>
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">Password</label>
          <input type="password" class="form-control" id="login-password" required>
        </div>
        <button type="button" class="btn btn-primary" onclick="login()">Login</button>
      </form>
    `;
  }
  
  function showRegister() {
    document.getElementById("main-content").innerHTML = `
      <h3 class="text-center">Register</h3>
      <form class="w-50 mx-auto">
        <div class="mb-3">
          <label for="register-email" class="form-label">Email address</label>
          <input type="email" class="form-control" id="register-email" required>
        </div>
        <div class="mb-3">
          <label for="register-username" class="form-label">Username</label>
          <input type="text" class="form-control" id="register-username" required>
        </div>
        <div class="mb-3">
          <label for="register-password" class="form-label">Password</label>
          <input type="password" class="form-control" id="register-password" required>
        </div>
        <button type="button" class="btn btn-success" onclick="register()">Register</button>
      </form>
    `;
  }
  
  
  function login() {
    const username = document.getElementById("login-username").value;
    alert(`Welcome back, ${username}`);
    document.getElementById("logoutBtn").classList.remove("d-none");
    document.getElementById("main-content").innerHTML = `<h3 class="text-success text-center">Hello, ${username}! You are logged in.</h3>`;
  }
  
  function register() {
    const email = document.getElementById("register-email").value;
    const username = document.getElementById("register-username").value;
    const password = document.getElementById("register-password").value;
  
    alert(`Registered with:\nEmail: ${email}\nUsername: ${username}`);
    document.getElementById("main-content").innerHTML = `<h3 class="text-primary text-center">Registration complete!</h3>`;
  }
  
  function logout() {
    alert("You've been logged out.");
    document.getElementById("logoutBtn").classList.add("d-none");
    document.getElementById("main-content").innerHTML = `
      <div class="text-center">
        <h1>Welcome to CloudMusic 🎧</h1>
        <p>Enjoy cloud-based music streaming anywhere, anytime.</p>
      </div>
    `;
  }
  