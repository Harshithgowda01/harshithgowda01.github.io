// ==========================================
// WELCOME POPUP ON PAGE LOAD
// ==========================================

window.addEventListener('load', () => {
    // Show welcome popup
    setTimeout(() => {
        alert('🎉 Welcome to Harshith Gowda H.B\'s Portfolio!\n\nExplore my projects, skills, and feel free to leave feedback. 😊');
    }, 500);
});

// ==========================================
// DISPLAY CURRENT DATE AND TIME DYNAMICALLY
// ==========================================

function updateDateTime() {
    const dateTimeDisplay = document.getElementById('dateTimeDisplay');
    
    if (!dateTimeDisplay) {
        console.error('Date time display element not found!');
        return;
    }
    
    const now = new Date();
    
    // Get individual date/time components
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    
    const dayName = days[now.getDay()];
    const monthName = months[now.getMonth()];
    const date = now.getDate();
    const year = now.getFullYear();
    
    // Get time
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    
    // Add leading zeros
    const minutesStr = minutes < 10 ? '0' + minutes : minutes;
    const secondsStr = seconds < 10 ? '0' + seconds : seconds;
    
    // Format: "Monday, January 15, 2024 at 03:45:30 PM"
    const formattedDateTime = `${dayName}, ${monthName} ${date}, ${year} at ${hours}:${minutesStr}:${secondsStr} ${ampm}`;
    
    dateTimeDisplay.innerHTML = `<i class="fas fa-clock"></i> ${formattedDateTime}`;
}

// Update time immediately when page loads
updateDateTime();

// Update every second (1000 milliseconds)
setInterval(updateDateTime, 1000);

console.log('✅ Date/Time function initialized');

// ==========================================
// ARRAY MANAGEMENT - HOBBIES
// ==========================================

let hobbies = ['Coding', 'Reading Tech Blogs', 'Playing Chess', 'Learning New Technologies'];

function displayHobbies() {
    const hobbiesList = document.getElementById('hobbiesList');
    
    if (!hobbiesList) {
        console.error('Hobbies list element not found!');
        return;
    }
    
    hobbiesList.innerHTML = '';
    
    if (hobbies.length === 0) {
        hobbiesList.innerHTML = '<p style="text-align: center; color: #888;">No hobbies added yet. Add your first hobby!</p>';
        return;
    }
    
    hobbies.forEach((hobby, index) => {
        const hobbyElement = document.createElement('div');
        hobbyElement.className = 'hobby-item';
        hobbyElement.style.display = 'block'; // Display as block for better layout
        hobbyElement.style.marginBottom = '10px';
        hobbyElement.innerHTML = `
            <i class="fas fa-heart" style="color: #ff00ff; margin-right: 8px;"></i>
            <span style="font-size: 1rem;">${hobby}</span>
            <button onclick="removeHobby(${index})" 
                    style="margin-left: 15px; background: rgba(255, 0, 136, 0.2); 
                           border: 1px solid #ff0088; color: #ff0088; 
                           padding: 5px 12px; border-radius: 15px; cursor: pointer;
                           transition: all 0.3s ease;"
                    onmouseover="this.style.background='#ff0088'; this.style.color='white';"
                    onmouseout="this.style.background='rgba(255, 0, 136, 0.2)'; this.style.color='#ff0088';">
                <i class="fas fa-times"></i> Remove
            </button>
        `;
        hobbiesList.appendChild(hobbyElement);
    });
}

function addHobby() {
    const newHobbyInput = document.getElementById('newHobby');
    const newHobby = newHobbyInput.value.trim();
    
    if (newHobby) {
        hobbies.push(newHobby);
        displayHobbies();
        newHobbyInput.value = '';
        
        // Visual feedback
        alert(`✅ "${newHobby}" added to hobbies!`);
    } else {
        alert('⚠️ Please enter a hobby first!');
    }
}

function removeLastHobby() {
    if (hobbies.length > 0) {
        const removed = hobbies.pop();
        displayHobbies();
        alert(`🗑️ "${removed}" removed from hobbies!`);
    } else {
        alert('⚠️ No hobbies to remove!');
    }
}

function removeHobby(index) {
    const removed = hobbies[index];
    hobbies.splice(index, 1);
    displayHobbies();
    alert(`🗑️ "${removed}" removed from hobbies!`);
}

// Initialize hobbies display
displayHobbies();

// ==========================================
// ARRAY MANAGEMENT - BOOKS
// ==========================================

let favoriteBooks = [
    'Clean Code by Robert Martin',
    'The Pragmatic Programmer',
    'Data Science from Scratch',
    'Python Crash Course'
];

function displayBooks() {
    const booksList = document.getElementById('booksList');
    
    if (!booksList) {
        console.error('Books list element not found!');
        return;
    }
    
    booksList.innerHTML = '';
    
    if (favoriteBooks.length === 0) {
        booksList.innerHTML = '<p style="text-align: center; color: #888;">No books added yet. Add your first book!</p>';
        return;
    }
    
    favoriteBooks.forEach((book, index) => {
        const bookElement = document.createElement('div');
        bookElement.className = 'hobby-item';
        bookElement.style.borderColor = '#ff00ff';
        bookElement.style.display = 'block';
        bookElement.style.marginBottom = '10px';
        bookElement.innerHTML = `
            <i class="fas fa-book" style="color: #ff00ff; margin-right: 8px;"></i>
            <span style="font-size: 1rem;">${book}</span>
            <button onclick="removeBook(${index})" 
                    style="margin-left: 15px; background: rgba(255, 0, 136, 0.2); 
                           border: 1px solid #ff0088; color: #ff0088; 
                           padding: 5px 12px; border-radius: 15px; cursor: pointer;
                           transition: all 0.3s ease;"
                    onmouseover="this.style.background='#ff0088'; this.style.color='white';"
                    onmouseout="this.style.background='rgba(255, 0, 136, 0.2)'; this.style.color='#ff0088';">
                <i class="fas fa-times"></i> Remove
            </button>
        `;
        booksList.appendChild(bookElement);
    });
}

function addBook() {
    const newBookInput = document.getElementById('newBook');
    const newBook = newBookInput.value.trim();
    
    if (newBook) {
        favoriteBooks.push(newBook);
        displayBooks();
        newBookInput.value = '';
        alert(`✅ "${newBook}" added to favorite books!`);
    } else {
        alert('⚠️ Please enter a book title first!');
    }
}

function removeLastBook() {
    if (favoriteBooks.length > 0) {
        const removed = favoriteBooks.pop();
        displayBooks();
        alert(`🗑️ "${removed}" removed from books!`);
    } else {
        alert('⚠️ No books to remove!');
    }
}

function removeBook(index) {
    const removed = favoriteBooks[index];
    favoriteBooks.splice(index, 1);
    displayBooks();
    alert(`🗑️ "${removed}" removed from books!`);
}

displayBooks();

// ==========================================
// ARRAY MANAGEMENT - MOVIES
// ==========================================

let favoriteMovies = [
    'The Social Network',
    'Inception',
    'Interstellar',
    'The Matrix'
];

function displayMovies() {
    const moviesList = document.getElementById('moviesList');
    
    if (!moviesList) {
        console.error('Movies list element not found!');
        return;
    }
    
    moviesList.innerHTML = '';
    
    if (favoriteMovies.length === 0) {
        moviesList.innerHTML = '<p style="text-align: center; color: #888;">No movies added yet. Add your first movie!</p>';
        return;
    }
    
    favoriteMovies.forEach((movie, index) => {
        const movieElement = document.createElement('div');
        movieElement.className = 'hobby-item';
        movieElement.style.borderColor = '#00ff88';
        movieElement.style.display = 'block';
        movieElement.style.marginBottom = '10px';
        movieElement.innerHTML = `
            <i class="fas fa-film" style="color: #00ff88; margin-right: 8px;"></i>
            <span style="font-size: 1rem;">${movie}</span>
            <button onclick="removeMovie(${index})" 
                    style="margin-left: 15px; background: rgba(255, 0, 136, 0.2); 
                           border: 1px solid #ff0088; color: #ff0088; 
                           padding: 5px 12px; border-radius: 15px; cursor: pointer;
                           transition: all 0.3s ease;"
                    onmouseover="this.style.background='#ff0088'; this.style.color='white';"
                    onmouseout="this.style.background='rgba(255, 0, 136, 0.2)'; this.style.color='#ff0088';">
                <i class="fas fa-times"></i> Remove
            </button>
        `;
        moviesList.appendChild(movieElement);
    });
}

function addMovie() {
    const newMovieInput = document.getElementById('newMovie');
    const newMovie = newMovieInput.value.trim();
    
    if (newMovie) {
        favoriteMovies.push(newMovie);
        displayMovies();
        newMovieInput.value = '';
        alert(`✅ "${newMovie}" added to favorite movies!`);
    } else {
        alert('⚠️ Please enter a movie title first!');
    }
}

function removeLastMovie() {
    if (favoriteMovies.length > 0) {
        const removed = favoriteMovies.pop();
        displayMovies();
        alert(`🗑️ "${removed}" removed from movies!`);
    } else {
        alert('⚠️ No movies to remove!');
    }
}

function removeMovie(index) {
    const removed = favoriteMovies[index];
    favoriteMovies.splice(index, 1);
    displayMovies();
    alert(`🗑️ "${removed}" removed from movies!`);
}

displayMovies();

// ==========================================
// FORM SUBMISSION HANDLING
// ==========================================

const feedbackForm = document.getElementById('feedbackForm');
const successMessage = document.getElementById('successMessage');

if (feedbackForm && successMessage) {
    feedbackForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent actual form submission
        
        // Get form data
        const formData = new FormData(feedbackForm);
        const data = {};
        
        formData.forEach((value, key) => {
            if (data[key]) {
                // Handle multiple values (checkboxes)
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        });
        
        // Log form data to console (for demonstration)
        console.log('Form Data Submitted:', data);
        
        // Show success message
        feedbackForm.style.display = 'none';
        successMessage.style.display = 'block';
        
        // Scroll to success message
        successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
        
        // Reset form after 5 seconds and hide success message
        setTimeout(() => {
            feedbackForm.reset();
            feedbackForm.style.display = 'block';
            successMessage.style.display = 'none';
        }, 5000);
    });
}

// ==========================================
// MOBILE NAVIGATION TOGGLE
// ==========================================

const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

if (navLinks) {
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu) navMenu.classList.remove('active');
            if (hamburger) hamburger.classList.remove('active');
        });
    });
}

// ==========================================
// SMOOTH SCROLL WITH OFFSET
// ==========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offset = 80;
            const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// NAVBAR BACKGROUND ON SCROLL
// ==========================================

const navbar = document.querySelector('.navbar');

if (navbar) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = 'rgba(10, 10, 10, 0.98)';
            navbar.style.boxShadow = '0 5px 20px rgba(0, 255, 255, 0.1)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observerCallback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

const animatedElements = document.querySelectorAll(
    '.skill-card, .contact-card, .stat-item, .about-description'
);

animatedElements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(element);
});

// ==========================================
// CONSOLE MESSAGES
// ==========================================

console.log('%c🚀 Portfolio Website Loaded Successfully! ', 'background: linear-gradient(135deg, #00ffff, #ff00ff); color: white; font-size: 16px; padding: 10px; border-radius: 5px;');
console.log('%cDeveloped by: Harshith Gowda H.B', 'color: #00ffff; font-size: 14px;');
console.log('%cAll interactive features are working!', 'color: #00ff88; font-size: 12px;');
console.log('%c⏰ Date & Time: Updating every second', 'color: #ff00ff; font-size: 12px;');
console.log('%c❤️ Hobbies/Books/Movies: Arrays are active', 'color: #00ffff; font-size: 12px;');