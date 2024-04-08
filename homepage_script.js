document.addEventListener('DOMContentLoaded', function() {
    const tabs = document.querySelectorAll('[data-tab]');
    const tabContents = document.querySelectorAll('.tab-content');
  
    tabs.forEach(tab => {
      tab.addEventListener('click', function() {
        const tabId = this.getAttribute('data-tab');
  
        tabContents.forEach(content => {
          content.classList.remove('active');
        });
  
        document.getElementById(tabId).classList.add('active');
  
        tabs.forEach(t => {
          t.classList.remove('active');
        });
  
        this.classList.add('active');
      });
    });
  
    const logoutBtn = document.getElementById('logoutBtn');
    const confirmationDialog = document.getElementById('confirmationDialog');
    const confirmLogoutBtn = document.getElementById('confirmLogoutBtn');
    const cancelLogoutBtn = document.getElementById('cancelLogoutBtn');
  
    logoutBtn.addEventListener('click', function() {
      confirmationDialog.style.display = 'flex'; // Show confirmation dialog
    });
  
    confirmLogoutBtn.addEventListener('click', function() {
      window.location.href = 'login.html'; // Redirect to login.html on logout confirmation
    });
  
    cancelLogoutBtn.addEventListener('click', function() {
      confirmationDialog.style.display = 'none'; // Hide confirmation dialog
    });
  });
  