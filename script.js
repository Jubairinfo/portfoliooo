(function() {
  // Smooth scroll for nav links
  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetEl = document.getElementById(targetId);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  // Chatbot functionality
  const chatBtn = document.getElementById('chatbotButton');
  const chatPanel = document.getElementById('chatbotPanel');
  const chatClose = document.getElementById('chatClose');
  const chatSend = document.getElementById('chatSend');
  const chatInput = document.getElementById('chatInput');
  const chatMessages = document.getElementById('chatMessages');

  function toggleChat(show) {
    if (show) {
      chatPanel.classList.add('show');
    } else {
      chatPanel.classList.remove('show');
    }
  }

  chatBtn.addEventListener('click', () => {
    toggleChat(true);
  });

  chatClose.addEventListener('click', () => {
    toggleChat(false);
  });

  function addUserMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message user-message';
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function addBotMessage(text) {
    const msgDiv = document.createElement('div');
    msgDiv.className = 'message bot-message';
    msgDiv.textContent = text;
    chatMessages.appendChild(msgDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function processUserInput(input) {
    const lower = input.toLowerCase();
    if (lower.includes('skill') || lower.includes('know')) {
      addBotMessage('Jubair knows Verilog, Python, C, Embedded systems, VLSI design, and more. Check the Skills section!');
    } else if (lower.includes('project')) {
      addBotMessage('He has worked on VLSI verification, AI warning system, gas leakage detector, and railway gate controller.');
    } else if (lower.includes('education') || lower.includes('college')) {
      addBotMessage('BE ECE at GCE Tirunelveli, CGPA 8.2. HSC 93% from T.D.T.A school, NMMS scholar.');
    } else if (lower.includes('contact') || lower.includes('email')) {
      addBotMessage('You can reach him at mohamedkassalijubair18@gmail.com or +91 8608177246.');
    } else if (lower.includes('hello') || lower.includes('hi')) {
      addBotMessage('Hello! How can I help you today?');
    } else {
      addBotMessage('I\'m not sure. Please ask about skills, projects, education, or contact.');
    }
  }

  chatSend.addEventListener('click', () => {
    const text = chatInput.value.trim();
    if (text === '') return;
    addUserMessage(text);
    chatInput.value = '';
    setTimeout(() => processUserInput(text), 400);
  });

  chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      chatSend.click();
    }
  });

  window.addEventListener('click', (e) => {
    if (!chatPanel.contains(e.target) && !chatBtn.contains(e.target) && chatPanel.classList.contains('show')) {
      toggleChat(false);
    }
  });

  // ---------- SCROLL ANIMATION USING INTERSECTION OBSERVER ----------
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animated');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2, rootMargin: '0px 0px -50px 0px' });

  animatedElements.forEach(el => observer.observe(el));
})();
