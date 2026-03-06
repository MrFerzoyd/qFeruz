
    // Theme Toggle
    const themeToggle = document.getElementById('themeToggle');
    const htmlElement = document.documentElement;
    const body = document.body;

    // Проверяем сохраненную тему
    const savedTheme = localStorage.getItem('theme') || 'dark';
    if (savedTheme === 'light') {
      body.classList.add('light-mode');
      themeToggle.textContent = '🌞';
    }

    themeToggle.addEventListener('click', () => {
      body.classList.toggle('light-mode');
      const isLight = body.classList.contains('light-mode');
      themeToggle.textContent = isLight ? '🌞' : '🌙';
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
    });

    // Skills Data
    const skills = [
      { name: 'Python', level: 7 },
      { name: 'HTML', level: 85 },
      { name: 'CSS', level: 55 },
      { name: 'JS', level: 40 },
      { name: 'Node.js', level: 75 },
      { name: 'Tailwind', level: 90 }
    ];

    // Certificates Data
    const certificates = [
      {
        title: 'Apple',
        organization: 'Apple Inc',
        link: 'View Certificate'
      }
      // {
      //   title: 'Apple',
      //   organization: 'Apple Inc',
      //   link: 'View Certificate'
      // },
      // {
      //   title: 'Apple',
      //   organization: 'Apple Inc',
      //   link: 'View Certificate'
      // },
      // {
      //   title: 'Apple',
      //   organization: 'Apple Inc',
      //   link: 'View Certificate'
      // }
    ];

    // Socials Data
    const socials = [
      { name: 'Instagram', icon: '<a href=""><i class="fa-brands fa-instagram"></i></a>' },
      { name: 'GitHub', icon: '<a href="https://github.com/MrFerzoyd"><i class="fa-brands fa-github"></i></a>' },
      { name: 'LinkedIn', icon: '<a href=""><i class="fa-brands fa-linkedin"></i></a>' },
      { name: 'Discord', icon: '<a href=""><i class="fa-brands fa-discord"></i></a>' },
      { name: 'LeetCode', icon: '<a href=""><i class="fa-brands fa-leetcode"></i></a>' }
    ];

    // Terminal Animation
    function initTerminal() {
      const terminalContent = document.getElementById('terminalContent');
      
      // PART 1: User Info
      const aboutInfo = [
        { prefix: '> ', text: 'Hi, I\'m a web developer' },
        { prefix: '> ', text: 'I specialize in frontend development' },
        { prefix: '> ', text: 'Always learning something new' }
      ];

      // PART 2: User custom text
      const userInfo = [
        { prefix: '$ ', text: "'I've been studying at IT Park for 10 months now.'" },
        { prefix: '$ ', text: 'I love cats' }
      ];

      let timeOffset = 0;

      // Function to add terminal line
      function addTerminalLine(line) {
        const lineEl = document.createElement('div');
        lineEl.className = 'terminal-line active';
        lineEl.innerHTML = `<span class="terminal-prefix">${line.prefix}</span><span class="terminal-text">${line.text}</span>`;
        terminalContent.appendChild(lineEl);
      }

      // Function to add empty line
      function addEmptyLine() {
        const lineEl = document.createElement('div');
        lineEl.className = 'terminal-line active';
        lineEl.innerHTML = '';
        terminalContent.appendChild(lineEl);
      }

      // Show about info
      aboutInfo.forEach((line, idx) => {
        setTimeout(() => addTerminalLine(line), timeOffset + (idx * 400));
      });
      timeOffset += aboutInfo.length * 400;

      // Empty line
      setTimeout(() => addEmptyLine(), timeOffset);
      timeOffset += 400;

      // Show user info
      userInfo.forEach((line, idx) => {
        setTimeout(() => addTerminalLine(line), timeOffset + (idx * 400));
      });
      timeOffset += userInfo.length * 400;

      // Empty line
      setTimeout(() => addEmptyLine(), timeOffset);
      timeOffset += 400;

      // Add cursor at the end
      setTimeout(() => {
        const cursorEl = document.createElement('div');
        cursorEl.className = 'terminal-line active';
        cursorEl.innerHTML = '<span class="terminal-prefix">$ </span><span class="cursor"></span>';
        terminalContent.appendChild(cursorEl);
      }, timeOffset);
    }

    // Skills Rendering - Orbital Style
    function initSkills() {
      const skillsContainer = document.getElementById('skillsContainer');
      const radius = 150;
      const angleSlice = 360 / skills.length;

      skills.forEach((skill, idx) => {
        const angle = angleSlice * idx;

        const skillItem = document.createElement('div');
        skillItem.className = 'skill-item';
        skillItem.style.animationDelay = `${-angle / 12}s`;

        skillItem.innerHTML = `
          <div class="skill-orbit-content">
            <div class="skill-bubble">
              <div class="skill-name">${skill.name}</div>
              <div class="skill-percent">${skill.level}%</div>
            </div>
          </div>
        `;

        skillsContainer.appendChild(skillItem);
      });
    }

    // Certificates Rendering
    function initCertificates() {
      const grid = document.getElementById('certificatesGrid');
      
      certificates.forEach((cert, idx) => {
        const card = document.createElement('div');
        card.className = 'certificate-card';
        card.innerHTML = `
          <div class="certificate-header">
            <div class="certificate-icon">🏆</div>
            <div class="certificate-info">
              <div class="certificate-title">${cert.title}</div>
              <div class="certificate-org">${cert.organization}</div>
            </div>
          </div>
          <a href="#" class="certificate-link">
            ${cert.link}
            <span class="arrow">→</span>
          </a>
        `;
        grid.appendChild(card);
      });
    }

    // Socials Rendering
    function initSocials() {
      const container = document.getElementById('socialsContainer');
      
      socials.forEach(social => {
        const icon = document.createElement('div');
        icon.className = 'social-icon';
        icon.innerHTML = `
          ${social.icon}
          <div class="social-tooltip">${social.name}</div>
        `;
        container.appendChild(icon);
      });
    }

    // Smooth scroll for nav links
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const target = link.getAttribute('href');
        const element = document.querySelector(target);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });

    // Initialize all
    document.addEventListener('DOMContentLoaded', () => {
      initTerminal();
      initSkills();
      initCertificates();
      initSocials();

    });