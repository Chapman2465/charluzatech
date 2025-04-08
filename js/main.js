// ===== Button ======
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const mainNav = document.querySelector('.main-nav');
  
  menuBtn.addEventListener('click', function() {
      mainNav.classList.toggle('active');
  });
  
  // Optional: Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
      link.addEventListener('click', function() {
          mainNav.classList.remove('active');
      });
  });
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute("href")).scrollIntoView({
        behavior: "smooth",
      });
    });
  });
  
  // ===== Animated Counters =====
  const counters = document.querySelectorAll('.counter');
  const speed = 200; // lower is faster
  
  const animateCounters = () => {
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
  
        const increment = target / speed;
  
        if (count < target) {
          counter.innerText = Math.ceil(count + increment);
          setTimeout(updateCount, 20);
        } else {
          counter.innerText = target;
        }
      };
      updateCount();
    });
  };
  
  // Run when counters enter viewport
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounters();
      }
    });
  }, {
    threshold: 0.6
  });
  
  counters.forEach(counter => observer.observe(counter));
  
  // ===== Contact Form Validation =====
  const form = document.getElementById("contact-form");
  
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const name = form.querySelector('input[name="name"]');
      const email = form.querySelector('input[name="email"]');
      const message = form.querySelector('textarea[name="message"]');
  
      let errorMessage = "";
  
      if (!name.value.trim()) {
        errorMessage += "Name is required.\n";
      }
  
      if (!email.value.trim()) {
        errorMessage += "Email is required.\n";
      } else if (!/^\S+@\S+\.\S+$/.test(email.value)) {
        errorMessage += "Please enter a valid email address.\n";
      }
  
      if (!message.value.trim()) {
        errorMessage += "Message cannot be empty.\n";
      }
  
      if (errorMessage) {
        alert(errorMessage);
      } else {
        // You can replace this with real form submission logic
        alert("Form submitted successfully!");
        form.reset();
      }
    });
  }
  