var showMoreButton = document.getElementById('showMoreButton');
var lastTwoAccordions = document.querySelectorAll('.accordion-item:nth-last-child(-n+2)');

var isExpanded = false;

function toggleAccordionVisibility() {
    lastTwoAccordions.forEach(function (accordion) {
    if (accordion.style.display === 'none') {
        accordion.style.display = 'block';
    } else {
        accordion.style.display = 'none';
    }
    });

    isExpanded = !isExpanded;
    showMoreButton.textContent = isExpanded ? 'Show Less' : 'Show More';
}

showMoreButton.addEventListener('click', toggleAccordionVisibility);