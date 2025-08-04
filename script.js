// script.js - Responsive Blog Interactivity

const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebar-toggle');
const showSidebarBtn = document.getElementById('show-sidebar-btn');

sidebarToggle.onclick = function() {
    sidebar.style.display = 'none';
    showSidebarBtn.style.display = 'block';
};

showSidebarBtn.onclick = function() {
    sidebar.style.display = '';
    showSidebarBtn.style.display = 'none';
};

// Responsive nav menu toggle
const navToggle = document.getElementById('nav-toggle');
const navUl = document.querySelector('nav ul');
navToggle.onclick = function() {
    navUl.classList.toggle('active');
};
