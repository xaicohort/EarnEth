// Select all list items within the ul with class "list--inline"
var listItems = document.querySelectorAll('.list--inline .list__item');

// Add click event listener to each list item
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var pageName = item.textContent.toLowerCase().trim() + '.html'; // Generate the page name based on list item text
        window.location.href = pageName; // Navigate to the generated page
    });
});
// Select all list items within the ul with class "nav__list"
var listItems = document.querySelectorAll('.nav__list .nav__list__item');

// Add click event listener to each list item
listItems.forEach(function(item) {
    item.addEventListener('click', function() {
        var pageName = item.textContent.toLowerCase() + '.html'; // Generate the page name based on list item text
        window.location.href = pageName; // Navigate to the generated page
    });
});
