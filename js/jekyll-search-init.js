if(document.getElementById('searchInput') && document.getElementById('searchResults')) {
	SimpleJekyllSearch.init({
		searchInput: document.getElementById('searchInput'),
		resultsContainer: document.getElementById('searchResults'),
		json: '/blog/search.json',
		searchResultTemplate: '<li><a href="{url}">{title}</a></li>'
	})
}