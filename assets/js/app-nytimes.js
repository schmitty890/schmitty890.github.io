/**
 * [getData is a function that accepts a search parameter, this getData function makes our api call to the nytimes api to get the data returned, once that data is returned, the data is put into html and added to the page.]
 */
function getData(search) {
    var searchTerm = search || 'World News'; // search term is the search entered in the form, if there is not a search term, default the search to 'World News'
    var begin_date = $('#begin-form').val() || undefined; // save date from the value in the form
    var end_date = $('#end-form').val() || undefined; // save date from the value in the form
    var numberOfEntries = $('#numberOfEntries').val(); // value of the form dropdown menu for the number of entries
    var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
    url += '?' + $.param({ 'api-key': "94b695fed10c4a9a9cb243c55594a880" }); //add the apikey as a parameter. notice the first query parameter has the ?, every query parameter after has an & instead of a ?
    url += `&q=${searchTerm}`; // add query param for the search term, this is defined as q=xyz, this documentation is on https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json

    if (begin_date !== undefined || '' && end_date !== undefined || '') {
        url += `&begin_date=${begin_date}`;
        url += `&end_date=${end_date}`;
    } // conditional for if the begin_date and end_date are not undefined or not equal to nothing (something must be entered into both form fields, if there is input in both form fields, then add on to the url the begin_date and end_date query parameters)

    //begin ajax get request to get the article data
    $.ajax({
        url: url, // add url as our url created above
        method: 'GET', // get request because we are getting data
    }).done(function(result) {
        // console.log(result); // console log result to see the raw data returned from the api
        $('#results').empty(); // empty the results div before we populate it with new articles
        for (var i = 0; i < numberOfEntries; i++) { // for loop, looping over the numberOfEntries, which is the value of the dropdown menu in the form, this variable is captured at the beginning of the getData function
            var responseEntry = result.response.docs[i]; // store the current index as a variable of responseEntry to reuse it below
            var title = responseEntry.headline.main; // save the title as a variable
            var author = responseEntry.byline.original; // save the author as a variable
            var section = responseEntry.type_of_material; // save the section as a variable
            var pubDate = responseEntry.pub_date; // save the publish date as a variable
            var webURL = responseEntry.web_url; // save the url as a variable
            var theIndex = i + 1; // save the index as a variable
            var html = ''; // create our html block for the article

            html += `
            <div class="article">
                <h3><span class="number label-primary">${theIndex}</span><strong>${title}</strong></h3>
                <h5>${author}</h5>
                <h5>Section: ${section}</h5>
                <h5>${pubDate}</h5>
                <a href="${webURL}">${webURL}</a></div>
        		`; // the html variable is populated with the article data

            $('#results').append(html); // the article data is added to the results div
        }
    }).fail(function(err) {
        throw err; // if there is an error in the ajax call, throw an error
    });
}

//Event Handlers
$('body').on('click', '.submit', function(event) { // on click event handler for when the submit button is clicked
    event.preventDefault();
    var searchedTerm = $('#searchedTerm').val().trim(); // create variable of searchedTerm to hold the value of search term in the form
    getData(searchedTerm); // pass the searchedTerm variable to the getData function, this will be the searched term in the ajax call
    $('input').val(''); // clear the input values on the form
});

$('body').on('click', '.clear', function(event) { // on click even thandler for when the clear button is clicked
    event.preventDefault();
    $('#results').empty(); // clear the results in the results div
});