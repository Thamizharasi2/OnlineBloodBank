document.addEventListener('DOMContentLoaded', function () {
    // Apply the saved theme on page load
    const savedSettings = JSON.parse(localStorage.getItem('settings'));
    if (savedSettings) {
        const theme = savedSettings.theme || 'light';  // Default to light if no theme is found
        document.getElementById('theme').value = theme;
        applyTheme(theme);

        // Also set the notification checkbox state if needed
        document.getElementById('notifications').checked = savedSettings.notifications;
    }

    // Listen for form submission
    document.getElementById('settingsForm').addEventListener('submit', function (event) {
        event.preventDefault();
        const theme = document.getElementById('theme').value;
        const notifications = document.getElementById('notifications').checked;

        // Save settings to localStorage
        localStorage.setItem('settings', JSON.stringify({
            theme: theme,
            notifications: notifications
        }));

        // Apply the selected theme
        applyTheme(theme);

        // Show success message
        const successMessage = document.getElementById('successMessage');
        successMessage.classList.remove('hidden');
        successMessage.innerHTML = `<p>Settings updated successfully!</p>`;
    });
});

// Function to apply the theme
function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-theme');
    } else {
        document.body.classList.remove('dark-theme');
    }
}
