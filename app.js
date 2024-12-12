document.querySelectorAll('.Tab').forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove 'active' class from all tabs
        document.querySelectorAll('.Tab').forEach(btn => btn.classList.remove('active'));

        // Add 'active' class to the clicked tab
        tab.classList.add('active');

        // Hide all content
        document.querySelectorAll('.TabContent').forEach(content => content.classList.remove('active'));

        // Show content associated with the clicked tab
        const contentId = tab.getAttribute('data-content');
        document.getElementById(contentId).classList.add('active');
    });
});
