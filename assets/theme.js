(function () {
    'use strict';

    var storageKey = 'ypertex-theme';
    var themes = ['light', 'dark', 'system'];
    var root = document.documentElement;

    function readTheme() {
        try {
            var savedTheme = window.localStorage.getItem(storageKey);
            return themes.indexOf(savedTheme) !== -1 ? savedTheme : 'system';
        } catch (error) {
            return 'system';
        }
    }

    function persistTheme(theme) {
        try {
            if (theme === 'system') {
                window.localStorage.removeItem(storageKey);
            } else {
                window.localStorage.setItem(storageKey, theme);
            }
        } catch (error) {
            // The selected theme still applies for this page if storage is unavailable.
        }
    }

    function updateControls(theme) {
        var labels = {
            light: 'Light',
            dark: 'Dark',
            system: 'System'
        };
        var icons = {
            light: 'la-sun',
            dark: 'la-moon',
            system: 'la-desktop'
        };
        var toggle = document.querySelector('.yx-theme-toggle');

        if (!toggle) {
            return;
        }

        toggle.setAttribute('aria-label', 'Theme: ' + labels[theme] + '. Choose color theme.');

        var label = toggle.querySelector('[data-theme-label]');
        var icon = toggle.querySelector('[data-theme-icon]');

        if (label) {
            label.textContent = ' Theme: ' + labels[theme];
        }

        if (icon) {
            icon.className = 'las ' + icons[theme];
        }

        document.querySelectorAll('[data-theme-value]').forEach(function (option) {
            var selected = option.getAttribute('data-theme-value') === theme;
            option.classList.toggle('active', selected);
            option.setAttribute('aria-pressed', selected ? 'true' : 'false');
        });
    }

    function setTheme(theme, persist) {
        root.setAttribute('data-theme', theme);

        if (persist) {
            persistTheme(theme);
        }

        updateControls(theme);
    }

    var initialTheme = readTheme();
    root.setAttribute('data-theme', initialTheme);

    document.addEventListener('DOMContentLoaded', function () {
        updateControls(initialTheme);

        document.querySelectorAll('[data-theme-value]').forEach(function (option) {
            option.addEventListener('click', function () {
                setTheme(option.getAttribute('data-theme-value'), true);
            });
        });
    });
}());
