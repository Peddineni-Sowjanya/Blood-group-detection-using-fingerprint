document.addEventListener('DOMContentLoaded', function() {
    // File upload preview
    const fileInput = document.querySelector('input[type="file"]');
    if (fileInput) {
        fileInput.addEventListener('change', function(e) {
            const fileName = e.target.files[0]?.name;
            if (fileName) {
                const label = document.querySelector('.upload-label span');
                label.textContent = fileName;
            }
        });
    }

    // Add animation to blood group icons
    const bloodIcons = document.querySelectorAll('.blood-icon');
    bloodIcons.forEach(icon => {
        icon.addEventListener('mouseover', function() {
            this.style.transform = 'scale(1.2)';
            this.style.transition = 'transform 0.3s ease';
        });

        icon.addEventListener('mouseout', function() {
            this.style.transform = 'scale(1)';
        });
    });

    // Add smooth transitions between pages
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') !== '#') {
                e.preventDefault();
                const href = this.getAttribute('href');
                document.body.style.opacity = '0';
                setTimeout(() => {
                    window.location.href = href;
                }, 300);
            }
        });
    });
}); 