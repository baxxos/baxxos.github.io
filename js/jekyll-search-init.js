SimpleJekyllSearch.init({
	searchInput: document.getElementById('searchInput'),
	resultsContainer: document.getElementById('searchResults'),
	json: '/search.json',
	searchResultTemplate: '<li><a href="{url}">{title}</a></li>'
})