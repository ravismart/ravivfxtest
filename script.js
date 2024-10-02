document.addEventListener("DOMContentLoaded", function() {
    let currentIndex = 0;
    const modal = document.getElementById('image-modal');
    const modalImg = document.getElementById('modal-image');
    const captionText = document.getElementById('caption');
    const closeBtn = document.querySelector('.close');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    function loadPage(page) {
        const mainContent = document.getElementById('main-content');
        const loader = document.getElementById('loader');
        loader.style.display = 'block';

        setTimeout(() => {
            loader.style.display = 'none';
            switch (page) {
                case 'home':
                    mainContent.innerHTML = `
                    <div class="video-background" style="position:relative;">
                        <!-- Embedded Vimeo video using an iframe -->
                        <div style="padding:56.25% 0 0 0; position:relative;">
                            <iframe 
                                src="https://player.vimeo.com/video/1015033668?autoplay=1&muted=1&loop=1&background=1&title=0&byline=0&portrait=0" 
                                frameborder="0" 
                                allow="autoplay; fullscreen; picture-in-picture" 
                                style="position:absolute; top:0; left:0; width:100%; height:100%; z-index:1;" 
                                title="Ravikanth_Compositing_Reel_2024">
                            </iframe>
                        </div>
                
                        <!-- Overlay layer -->
                        <div class="overlay" style="position:absolute; top:0; left:0; width:100%; height:100%; background: rgba(0, 0, 0, 0.5); z-index:2;"></div>
                
                        <!-- Content layer with text -->
                        <div class="content" style="position:absolute; top:50%; left:50%; transform:translate(-50%, -50%); z-index:3; color:white;">
                            <h1>VFX</h1>
                            <h2>Compositor</h2>
                        </div>
                    </div>
                `;
                
                
                
                
                    break;
                case 'mywork':
                    mainContent.innerHTML = `
                        <div class="video-gallery">
                           
                                <div class="video-box">
                                    <video muted>
                                        <source src="https://video.wixstatic.com/video/967fe0_30e7f4dc4184464c9aa8065baf416899/720p/mp4/file.mp4" type="video/mp4">
                                        Your browser does not support HTML5 video.
                                    </video>
                                </div>

                            
                        </div>
                    `;
                    document.querySelectorAll('.video-box video').forEach(video => {
                        video.addEventListener('mouseover', () => video.play());
                        video.addEventListener('mouseout', () => video.pause());
                    });
                    break;
                case 'breakdowns':
                    mainContent.innerHTML = `
                        
                        <div class="slider-container">
                            <img src="https://picsum.photos/960/540?random=1" alt="Before">
                            <div class="slider-overlay" style="background-image: url('https://picsum.photos/960/540?grayscale');"></div>
                            <div class="slider-handle" aria-label="Slider handle">|</div>
                        </div>
                        
                        <div class="content-description">
                            <h2>Breakdown of My Work</h2>
                            <p>Here you can see the before and after of my visual effects work.</p>
                        </div>
                    `;
                    initializeSlider();
                    break;
                    case 'portfolio':
                        mainContent.innerHTML = `
                            <div class="portfolio-gallery">
                                <div class="portfolio-item">
                                    <iframe src="https://drive.google.com/file/d/1OcwvYLbQKf65lz33LM7B5_odjW2Q5znP/preview" width="320" height="240" allow="autoplay"></iframe>
                                    <p>Image 1 Description</p>
                                    
                                </div>

                                <img src="https://picsum.photos/1070" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1080" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1090" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1020" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1030" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1040" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1050" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://picsum.photos/1060" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://static.wixstatic.com/media/967fe0_237ce1e086f24eaaba99773d8af76622~mv2.jpeg" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">
                                <img src="https://static.wixstatic.com/media/967fe0_e098f9f8951045089d782e66fb26e678~mv2.jpg" data-full="fullsize2.jpg" alt="Portfolio Image 6" class="portfolio-image">

                                <!-- Add more iframe elements here for additional images -->
                            </div>
                        
                        
                        

                        <div id="image-modal" class="image-modal" role="dialog" aria-labelledby="modal-image" aria-hidden="true">
                            <span class="close" aria-label="Close modal">×</span>
                            <div class="modal-content-container">
                                <img class="modal-content" id="modal-image" alt="Modal image">
                                <div id="caption" class="modal-description" aria-live="polite"></div>
                            </div>
                            <span class="prev" onclick="changeImage(-1)" aria-label="Previous image">&#10094;</span>
                            <span class="next" onclick="changeImage(1)" aria-label="Next image">&#10095;</span>
                        </div>
                    `;
                    initializePortfolio();
                    break;
                case 'about':
                    mainContent.innerHTML = `
                        <div class="about-me-content">

                        
                            <img src="https://static.wixstatic.com/media/967fe0_b15d636debfc4d3fa5ccd91be5c9e92e~mv2.jpeg/v1/fill/w_223,h_223,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/1674928531371%20(1).jpeg" alt="Profile Picture" class="profile-picture">
                            <h2> 🎬 Driven VFX Compositor 🌟 Crafting Captivating Visual Narratives</h2>
                            <p>
                                I am a driven VFX Compositor with a passion for creating immersive visual experiences. 
                                I thrive on paying attention to the smallest details and bringing a creative touch to everything I work on. 
                                Whether it's a movie, a commercial, or any visual project, I pour my heart into crafting stories that grab attention. 
                                With a commitment to excellence, I continuously seek new challenges to further hone my skills. 
                                As a collaborative team player, I'm dedicated to working with others to craft visually stunning and impactful storytelling experiences.
                            </p>
                            <a href="https://bebabf30-5d26-4c3c-8107-26fc3135ebc5.filesusr.com/ugd/967fe0_a80febd4fbe1444685159c1d8b76c9f3.pdf" download="RK_Resume.pdf" class="download-resume-btn">Download Resume</a>
                        </div>
                    `;
                    initializeAbout();
                    break;
                case 'contact':
                    mainContent.innerHTML = `
                        <div class="contact-form">
                            <h2>Contact Me</h2>
                            <form id="contactForm" action="https://formspree.io/f/mdknbwwq" method="POST">
                                <input type="text" name="name" placeholder="Your Name" required>
                                <input type="email" name="email" placeholder="Your Email" required>
                                <input type="text" name="subject" placeholder="Subject" required>
                                <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
                                <button type="submit">Send Message</button>
                            </form>
                            <div id="form-response" class="form-response"></div>
                        </div>
                    `;
                    initializeContact();
                    break;
                default:
                    mainContent.innerHTML = '<p>Page not found.</p>';
            }
        }, 1000);
    }

    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const page = this.getAttribute('data-page');
            loadPage(page);
        });
    });

    loadPage('home');

    function initializeSlider() {
        document.querySelectorAll('.slider-container').forEach(container => {
            const sliderHandle = container.querySelector('.slider-handle');
            const sliderOverlay = container.querySelector('.slider-overlay');
    
            function updateSlider(x) {
                if (x < 0) x = 0;
                if (x > container.offsetWidth) x = container.offsetWidth;
                sliderHandle.style.left = x + 'px';
                sliderOverlay.style.width = x + 'px';
            }
    
            function setInitialPosition() {
                const containerWidth = container.offsetWidth;
                const handleWidth = sliderHandle.offsetWidth;
                const initialPosition = (containerWidth - handleWidth) / 2;
                updateSlider(initialPosition);
            }
    
            // Set initial position
            setInitialPosition();
    
            function onMouseMove(e) {
                const x = e.pageX - container.offsetLeft;
                updateSlider(x);
            }
    
            function onMouseUp() {
                document.onmousemove = null;
                document.onmouseup = null;
            }
    
            sliderHandle.addEventListener('mousedown', function(e) {
                e.preventDefault();
                document.onmousemove = onMouseMove;
                document.onmouseup = onMouseUp;
            });
    
            // Add touch events for mobile compatibility
            sliderHandle.addEventListener('touchstart', function(e) {
                e.preventDefault();
                const touch = e.touches[0];
                const x = touch.pageX - container.offsetLeft;
                updateSlider(x);
    
                function onTouchMove(e) {
                    const touch = e.touches[0];
                    const x = touch.pageX - container.offsetLeft;
                    updateSlider(x);
                }
    
                function onTouchEnd() {
                    document.ontouchmove = null;
                    document.ontouchend = null;
                }
    
                document.ontouchmove = onTouchMove;
                document.ontouchend = onTouchEnd;
            });
    
            // Force redraw if necessary
            function forceRedraw() {
                const img = container.querySelector('img');
                if (img.complete) {
                    setInitialPosition(); // Set initial position after image is loaded
                } else {
                    img.addEventListener('load', setInitialPosition);
                }
            }
            forceRedraw();
        });
    }
    
    
    document.addEventListener('DOMContentLoaded', () => {
        forceRedraw();
    });
    
    
    

    function initializePortfolio() {
        const images = document.querySelectorAll('.portfolio-gallery img');

        images.forEach((img, index) => {
            img.addEventListener('click', function() {
                openModal(this, index);
            });
        });

        closeBtn.addEventListener('click', closeModal);
        prevBtn.addEventListener('click', () => changeImage(-1));
        nextBtn.addEventListener('click', () => changeImage(1));

        document.addEventListener('keydown', function(e) {
            if (modal.classList.contains('active')) {
                if (e.key === 'ArrowLeft') {
                    changeImage(-1);
                } else if (e.key === 'ArrowRight') {
                    changeImage(1);
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            }
        });
    }

    function openModal(image, index) {
        modal.classList.add('active');
        modalImg.src = image.src;
        captionText.textContent = image.getAttribute('data-description');
        currentIndex = index;
        updateNavButtons();
    }

    function closeModal() {
        modal.classList.remove('active');
    }

    function changeImage(n) {
        const images = document.querySelectorAll('.portfolio-gallery img');
        currentIndex = (currentIndex + n + images.length) % images.length;
        const img = images[currentIndex];
        modalImg.src = img.src;
        captionText.textContent = img.getAttribute('data-description');
        updateNavButtons();
    }

    function updateNavButtons() {
        const images = document.querySelectorAll('.portfolio-gallery img');
        prevBtn.style.display = images.length > 1 ? 'block' : 'none';
        nextBtn.style.display = images.length > 1 ? 'block' : 'none';
        closeBtn.style.display = 'block';
    }

    function initializeAbout() {
        // Add any specific initialization for the about page if necessary
    }

    function initializeContact() {
        const form = document.getElementById('contactForm');
        const responseDiv = document.getElementById('form-response');

        form.addEventListener('submit', function(event) {
            event.preventDefault(); // Prevent the default form submission

            const formData = new FormData(form);

            fetch(form.action, {
                method: 'POST',
                body: formData
            })
            .then(response => {
                if (response.ok) {
                    responseDiv.innerHTML = '<p>Thank you for your message. It has been sent successfully!</p>';
                    form.reset(); // Optionally reset the form fields
                } else {
                    responseDiv.innerHTML = '<p>Sorry, there was a problem sending your message. Please try again.</p>';
                }
            })
            .catch(() => {
                responseDiv.innerHTML = '<p>Thank you for your message. It has been sent successfully!.</p>';
            });
        });
    }

    // Initialize the contact form
    initializeContact();
});
