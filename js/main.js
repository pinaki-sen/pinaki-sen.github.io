// ==========================================
// DARK MODE FUNCTIONALITY
// ==========================================

const darkModeBtn = document.getElementById('darkModeBtn');
const htmlElement = document.documentElement;

// Check for saved dark mode preference or system preference
function initDarkMode() {
    const savedMode = localStorage.getItem('darkMode');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const shouldBeDark = savedMode === 'true' || (savedMode === null && prefersDark);
    
    if (shouldBeDark) {
        document.body.classList.add('dark-mode');
        document.body.classList.remove('light-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.body.classList.add('light-mode');
        document.body.classList.remove('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
}

darkModeBtn.addEventListener('click', () => {
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.body.classList.add('light-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('darkMode', 'false');
    } else {
        document.body.classList.remove('light-mode');
        document.body.classList.add('dark-mode');
        darkModeBtn.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('darkMode', 'true');
    }
});

// Initialize dark mode on page load
document.addEventListener('DOMContentLoaded', initDarkMode);

// ==========================================
// MOBILE MENU FUNCTIONALITY
// ==========================================

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close menu when a link is clicked
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// ==========================================
// BLOG FUNCTIONALITY
// ==========================================

// Blog posts data structure with inline content
const blogPosts = [
    {
        id: 'getting-started-nand-flash',
        title: 'Getting Started with NAND Flash Memory',
        date: new Date('2024-03-15'),
        readTime: '8 min read',
        excerpt: 'A comprehensive guide to understanding NAND Flash memory technology, its architecture, and how it forms the backbone of modern storage devices.',
        content: `# Getting Started with NAND Flash Memory

NAND Flash memory has revolutionized data storage technology. From SSDs in laptops to the memory in your smartphone, NAND Flash is everywhere. In this post, I'll walk you through the fundamentals of NAND Flash memory and why it's crucial for modern storage devices.

## What is NAND Flash Memory?

NAND Flash is a type of non-volatile memory that retains data even when power is disconnected. Unlike volatile memory like RAM, NAND Flash is perfect for long-term storage. It's called "NAND" because its memory cells are connected in a series formation resembling a NAND logic gate.

### Key Characteristics

- **Non-volatile**: Data persists without power
- **Scalable**: Can store multiple bits per cell (SLC, MLC, TLC, QLC)
- **Fast Access**: Much faster than mechanical drives
- **Durable**: No moving parts, resistant to physical shock
- **Low Power**: Ideal for portable and battery-powered devices

## NAND Flash Architecture

NAND Flash memory is organized in a hierarchical structure with cells forming strings, pages, blocks, and dies. Understanding this hierarchy is crucial for firmware development and storage optimization.

## Read, Write, and Erase Operations

Reading, writing, and erasing operations have different characteristics. Reading is relatively fast at the page level, writing requires erasing first, and erasing is a block-level operation that degrades cells over time.

## Wear and Reliability

NAND Flash cells have limited lifetime. Wear leveling and error correction codes are essential for extending device reliability.

[Read full article in the original blog post for complete technical details]`
    },
    {
        id: 'firmware-debugging-tips',
        title: 'Firmware Debugging Tips & Tricks',
        date: new Date('2024-03-10'),
        readTime: '6 min read',
        excerpt: 'Essential debugging techniques for embedded firmware development using JTAG, breakpoints, and various analysis tools.',
        content: `# Firmware Debugging Tips & Tricks

Debugging firmware is one of the most challenging yet rewarding aspects of embedded systems development. Unlike high-level software debugging, firmware debugging often happens without the luxury of print statements or IDE support. Let me share practical tips and tricks I've learned over years of firmware development.

## The Debugging Mindset

Before diving into tools and techniques, understand that firmware debugging is systematic investigation. You're essentially a detective piecing together clues from your system's behavior.

### The Golden Rule

> **Make one change at a time and verify the result.**

This single principle prevents cascading changes that make it impossible to isolate issues.

## Essential Debugging Tools

### 1. JTAG Debugger

JTAG (Joint Test Action Group) is your Swiss army knife for embedded debugging.

**What it does:**
- Stops program execution at breakpoints
- Reads/writes memory in real-time
- Inspects CPU registers
- Traces program execution

### 2. Logic Analyzer

Captures signal patterns from GPIO pins and communication buses. Non-invasive monitoring that reveals exactly what signals your code generates.

### 3. Serial Console (UART)

The humble serial port is incredibly powerful for real-time monitoring and debugging.

## Debugging Techniques

Strategic logging, runtime assertions, memory inspection, and watchdog monitoring are essential techniques for firmware debugging.

[See full technical details in the original blog post]`
    },
    {
        id: 'error-correction-codes',
        title: 'Understanding Error Correction Codes',
        date: new Date('2024-03-01'),
        readTime: '10 min read',
        excerpt: 'Deep dive into Hamming codes, Reed-Solomon codes, and modern error correction mechanisms used in storage systems.',
        content: `# Understanding Error Correction Codes

In the world of storage and communication systems, errors are inevitable. Cosmic rays, manufacturing defects, aging, and environmental factors all introduce bit errors into stored and transmitted data. Error Correction Codes (ECC) are the shield protecting our data.

## Why Do We Need ECC?

No physical system is perfect. NAND Flash aging, cosmic ray strikes, manufacturing defects, and temperature effects all introduce errors without ECC protection.

## Simple Error Detection: Parity

The simplest approach is parity - it can detect but not correct single-bit errors.

## Hamming Codes: Single Error Correction

Hamming codes are elegant - they can **correct single-bit errors** and can identify the exact position of the error.

## Advanced Codes: Reed-Solomon

For systems requiring correction of **multiple bit errors**, Reed-Solomon codes are the answer. They're used in QR codes, RAID systems, and space communications.

## Reed-Solomon for NAND Flash

NAND Flash characteristics like burst errors and multiple bit errors make Reed-Solomon an excellent choice for flash storage systems.

## Modern Codes: LDPC

Low-Density Parity-Check codes are taking over in modern systems, approaching Shannon's theoretical limits while maintaining practical efficiency.

[Complete technical details and code examples in the original blog post]`
    },
    {
        id: 'embedded-systems-real-time',
        title: 'Real-Time Operating Systems in Embedded Design',
        date: new Date('2024-02-25'),
        readTime: '7 min read',
        excerpt: 'Exploring real-time OS concepts, scheduling algorithms, and task management in resource-constrained embedded systems.',
        content: `# Real-Time Operating Systems in Embedded Design

Real-time systems are everywhere - from your car's antilock braking system to industrial control systems to medical devices. In this post, I'll explore the principles, challenges, and best practices of building real-time operating systems for embedded applications.

## What is a Real-Time System?

### Beyond Fast is Not Real-Time

A common misconception: Real-time = fast

**Reality**: Real-time = predictable timing

A real-time system is one that must satisfy explicit (usually) timing constraints; processing must happen by specified deadlines.

## Real-Time Operating System (RTOS) Fundamentals

### Task Scheduling

The RTOS scheduler decides which task runs when. Preemptive scheduling is common in hard real-time systems, where high-priority tasks can interrupt lower-priority ones.

### Rate-Monotonic Analysis (RMA)

The key principle for hard real-time systems: Assign task priorities inversely proportional to their periods.

## Synchronization & Communication

Race conditions are prevented using mutexes, semaphores, and message queues for safe task communication.

## Priority Inversion: The Silent Killer

Priority inversion occurs when a high-priority task is delayed by a lower-priority task holding a resource. Priority inheritance solves this problem.

## Memory Management

Pre-allocation is crucial - use fixed pools instead of dynamic malloc/free for predictability.

## Popular RTOS Choices

FreeRTOS, VxWorks, QNX, RTEMS, and Zephyr are popular choices depending on your needs.

[See full technical details and code examples in the original blog post]`
    }
];

// Load and display blog posts
async function loadBlogPosts() {
    const blogContainer = document.getElementById('blog-posts');
    blogContainer.innerHTML = '';

    // Sort posts by date (newest first)
    const sortedPosts = [...blogPosts].sort((a, b) => b.date - a.date);

    for (const post of sortedPosts) {
        const card = createBlogCard(post);
        blogContainer.appendChild(card);
    }
}

function createBlogCard(post) {
    const div = document.createElement('div');
    div.className = 'blog-post-card';
    div.innerHTML = `
        <div class="blog-post-header">
            <h3>${post.title}</h3>
            <div class="blog-post-meta">
                <span><i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}</span>
                <span><i class="fas fa-clock"></i> ${post.readTime}</span>
            </div>
        </div>
        <div class="blog-post-body">
            <p class="blog-post-excerpt">${post.excerpt}</p>
        </div>
        <div class="blog-post-footer">
            <a href="#" class="read-more">Read More <i class="fas fa-arrow-right"></i></a>
        </div>
    `;

    div.querySelector('.read-more').addEventListener('click', (e) => {
        e.preventDefault();
        openBlogPost(post);
    });

    return div;
}

function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Create and open blog modal
async function openBlogPost(post) {
    try {
        // Use inline content instead of fetching from file
        const html = marked.parse(post.content);

        const modal = document.createElement('div');
        modal.className = 'blog-modal active';
        modal.innerHTML = `
            <div class="blog-modal-content">
                <button class="blog-modal-close">&times;</button>
                <div class="blog-modal-header">
                    <h2>${post.title}</h2>
                    <div class="blog-modal-meta">
                        <span><i class="fas fa-calendar-alt"></i> ${formatDate(post.date)}</span>
                        <span><i class="fas fa-clock"></i> ${post.readTime}</span>
                    </div>
                </div>
                <div class="blog-modal-body">
                    ${html}
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        modal.querySelector('.blog-modal-close').addEventListener('click', () => {
            modal.remove();
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });

        // Close on escape key
        const closeOnEscape = (e) => {
            if (e.key === 'Escape') {
                modal.remove();
                document.removeEventListener('keydown', closeOnEscape);
            }
        };
        document.addEventListener('keydown', closeOnEscape);

    } catch (error) {
        console.error('Error loading blog post:', error);
        alert('Sorry, there was an error loading this blog post.');
    }
}

// ==========================================
// CONTACT FORM HANDLING
// ==========================================

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // For now, show a success message (in production, you'd send to a server)
        // You can integrate with services like Formspree, EmailJS, or your own backend

        try {
            // Example: Using Formspree (free service)
            // Replace YOUR_FORM_ID with your actual Formspree form ID
            const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                showFormSuccess();
                contactForm.reset();
            } else {
                showFormError();
            }
        } catch (error) {
            // If Formspree fails, show local success message
            console.log('Form submitted (local):', formData);
            showFormSuccess();
            contactForm.reset();
        }
    });
}

function showFormSuccess() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✓ Message Sent!';
    submitBtn.style.backgroundColor = '#00ff88';
    submitBtn.style.color = '#0a0e27';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
        submitBtn.style.color = '';
    }, 3000);
}

function showFormError() {
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = '✗ Error - Try Again';
    submitBtn.style.backgroundColor = '#ff3366';
    
    setTimeout(() => {
        submitBtn.textContent = originalText;
        submitBtn.style.backgroundColor = '';
    }, 3000);
}

// ==========================================
// SMOOTH SCROLL & ACTIVE NAV LINK
// ==========================================

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// ==========================================
// ANIMATE ON SCROLL
// ==========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeInUp 0.6s ease-out forwards';
        }
    });
}, observerOptions);

// Observe cards and items for staggered animations
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.about-card, .project-card, .hobby-card, .timeline-item');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.animationDelay = `${index * 0.1}s`;
        observer.observe(card);
    });

    // Load blog posts after DOM is ready
    loadBlogPosts();
});

// ==========================================
// PARALLAX EFFECT (optional)
// ==========================================

window.addEventListener('scroll', () => {
    const floatingElements = document.querySelectorAll('.float-circle, .float-square, .float-triangle');
    floatingElements.forEach((element, index) => {
        const scrollValue = window.scrollY;
        const speed = 0.5 + (index * 0.1);
        element.style.transform = `translateY(${scrollValue * speed}px)`;
    });
});

// ==========================================
// PERFORMANCE: Lazy load images (if any)
// ==========================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => imageObserver.observe(img));
}

// ==========================================
// UTILITY: Get current year for copyright
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.querySelector('.footer p');
    if (yearSpan) {
        const currentYear = new Date().getFullYear();
        yearSpan.textContent = `© ${currentYear} Pinaki Sen. All rights reserved. | Embedded Systems Engineer`;
    }
});
