document.addEventListener('DOMContentLoaded', () => {
    // Get screen elements
    const screens = {
        splash: document.getElementById('splashScreen'),
        login: document.getElementById('loginScreen'),
        home: document.getElementById('homeScreen'),
        career: document.getElementById('careerFieldsScreen'),
        resources: document.getElementById('resourcesScreen'),
        compare: document.getElementById('compareJobsScreen'),
        companies: document.getElementById('companiesScreen')
    };

    // Initial splash screen timeout
    setTimeout(() => {
        screens.splash.classList.add('hidden');
        screens.login.classList.remove('hidden');
    }, 2000);

    // Handle login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        screens.login.classList.add('hidden');
        screens.home.classList.remove('hidden');
    });

    // Add click handlers for menu items
    document.querySelectorAll('.menu-item').forEach((item, index) => {
        item.addEventListener('click', () => {
            screens.home.classList.add('hidden');
            switch(index) {
                case 0: // Find career
                    screens.career.classList.remove('hidden');
                    break;
                case 1: // Resources
                    screens.resources.classList.remove('hidden');
                    break;
                case 2: // Compare Jobs
                    screens.compare.classList.remove('hidden');
                    break;
                case 3: // Companies
                    screens.companies.classList.remove('hidden');
                    break;
            }
        });
    });

    // Global function to return to home screen
    window.showHomeScreen = (currentScreen) => {
        document.getElementById(currentScreen).classList.add('hidden');
        screens.home.classList.remove('hidden');
    };

    // Add search functionality
    document.querySelectorAll('.search-input').forEach(input => {
        input.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            // Add your search logic here
            console.log('Searching for:', searchTerm);
        });
    });
});

function showbot() { 
    var botbox = document.querySelectorAll('.botbox');
    var button = document.getElementById('botToggle');
   
    // Disable click for 1 second
    button.style.pointerEvents = 'none';
    botbox.forEach(function(botbox) {
      const ibot = document.getElementById('ibot');
  
      if (botbox.style.display === "flex" || botbox.style.display === " ") {
          // Hide the botbox
          botbox.classList.remove('expand');
          botbox.classList.add('collapsed');
          botbox.style.display = "block";
          botbox.style.width = "40px";
          botbox.style.maxHeight = '5px';
          setTimeout(function() {
           botbox.style.position = "absolute";
        }, 500);
         
          setTimeout(function() {
            botbox.classList.remove('collapsed');
            botbox.style.backgroundColor = "black";
        }, 1000); // 500 milliseconds (0.5 seconds) delay
          // Switch icons
         
        
          ibot.style.opacity = "0";
          
      } else {
        botbox.classList.remove('collapsed');
        botbox.classList.add('expand');
          // Show the botbox
          botbox.style.display = "flex";
          botbox.style.width = "100%";
          botbox.style.height = '50vh';
          botbox.style.maxHeight='350px';
          botbox.style.position = "relative";
          setTimeout(function() {
          ibot.style.opacity = "1";
        }, 1000); // 500 milliseconds (0.5 seconds) delay
  
          // Switch icons
        
        
          // Scroll to the top of the page smoothly
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      }
  });
  
  setTimeout(function() {
    button.style.pointerEvents = 'auto';
  }, 1000);
  }