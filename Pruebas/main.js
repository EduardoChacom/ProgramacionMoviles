document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('[data-bs-toggle="collapse"]');
    
    buttons.forEach(function (button) {
        const targetId = button.getAttribute('data-bs-target');
        const targetCollapse = document.querySelector(targetId);

        button.addEventListener('mouseenter', function () {
            targetCollapse.classList.add('show');
        });

        button.addEventListener('mouseleave', function () {
            targetCollapse.classList.remove('show');
        });
    });
});
