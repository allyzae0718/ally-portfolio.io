// 1. Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Testimonial Slider (Auto and Manual)
let currentTestimonialIndex = 0;
const testimonials = document.querySelectorAll('.testimonial-item');
const totalTestimonials = testimonials.length;

function showTestimonial(index) {
    // Hide all testimonials
    testimonials.forEach(testimonial => testimonial.style.display = 'none');
    
    // Show the current testimonial
    testimonials[index].style.display = 'block';
}

// Show the first testimonial by default
showTestimonial(currentTestimonialIndex);

// Auto Slide every 5 seconds
setInterval(() => {
    currentTestimonialIndex = (currentTestimonialIndex + 1) % totalTestimonials;
    showTestimonial(currentTestimonialIndex);
}, 5000);

// 3. Form Validation (if a contact form exists)
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        const name = contactForm.querySelector('input[name="name"]');
        const email = contactForm.querySelector('input[name="email"]');
        const message = contactForm.querySelector('textarea[name="message"]');

        if (!name.value || !email.value || !message.value) {
            e.preventDefault();
            alert("Please fill in all fields.");
            return;
        }

        // You can further add email format validation if necessary
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(email.value)) {
            e.preventDefault();
            alert("Please enter a valid email address.");
            return;
        }

        // If everything is valid, the form can be submitted
        alert("Form submitted successfully!");
    });
}



