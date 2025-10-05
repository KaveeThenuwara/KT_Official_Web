 const menuBtn = document.getElementById("menu-btn");
        const mobileMenu = document.getElementById("mobile-menu");
        const overlay = document.getElementById("overlay");
        const navbar = document.querySelector(".navbar");
        const navLinks = document.querySelectorAll(".nav-link");
        const mobileLinks = document.querySelectorAll(".mobile-link");
        const line1 = document.querySelector(".line1");
        const line2 = document.querySelector(".line2");
        const line3 = document.querySelector(".line3");

        function toggleMenu() {
            const isMenuOpen = mobileMenu.classList.contains("show");
            
            if (isMenuOpen) {
                mobileMenu.classList.remove("show");
                overlay.classList.remove("show");
                line1.style.transform = "rotate(0) translate(0, 0)";
                line2.style.opacity = "1";
                line3.style.transform = "rotate(0) translate(0, 0)";
            } else {
                mobileMenu.classList.add("show");
                overlay.classList.add("show");
                line1.style.transform = "rotate(45deg) translate(5px, 5px)";
                line2.style.opacity = "0";
                line3.style.transform = "rotate(-45deg) translate(7px, -6px)";
            }
        }

        window.addEventListener("scroll", () => {
            if (window.scrollY > 50) {
                navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
            }
            
            updateActiveNavLink();
        });

        function updateActiveNavLink() {
            const sections = document.querySelectorAll(".section");
            const scrollPos = window.scrollY + 100;
            
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                const sectionId = section.getAttribute("id");
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    navLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${sectionId}`) {
                            link.classList.add("active");
                        }
                    });
                    
                    mobileLinks.forEach(link => {
                        link.classList.remove("active");
                        if (link.getAttribute("href") === `#${sectionId}`) {
                            link.classList.add("active");
                        }
                    });
                }
            });
        }

        menuBtn.addEventListener("click", toggleMenu);
        overlay.addEventListener("click", toggleMenu);

        mobileLinks.forEach(link => {
            link.addEventListener("click", toggleMenu);
        });

        window.addEventListener('resize', function() {
            if (window.innerWidth > 768) {
                mobileMenu.classList.remove("show");
                overlay.classList.remove("show");
                line1.style.transform = "rotate(0) translate(0, 0)";
                line2.style.opacity = "1";
                line3.style.transform = "rotate(0) translate(0, 0)";
            }
        });

        updateActiveNavLink();


        