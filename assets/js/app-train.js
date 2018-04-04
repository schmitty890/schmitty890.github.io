console.log('app.js');

    // Initialize Firebase
    var config = {
        apiKey: "AIzaSyCmv4PvGtU4Piu4mYp3CvmpQ5FNWmIkHvI",
        authDomain: "trainscheduler-4c2b9.firebaseapp.com",
        databaseURL: "https://trainscheduler-4c2b9.firebaseio.com",
        projectId: "trainscheduler-4c2b9",
        storageBucket: "trainscheduler-4c2b9.appspot.com",
        messagingSenderId: "678484392625"
    };
    firebase.initializeApp(config);

    $(document).on('click', '#sign-in', function() {
        console.log('sign in');
        // Using a popup.
        var provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('profile');
        provider.addScope('email');
        firebase.auth().signInWithPopup(provider).then(function(result) {
         // This gives you a Google Access Token.
         var token = result.credential.accessToken;
         // The signed-in user info.
         var user = result.user;
        });
    });

    $(document).on('click', '#logout', function() {
        firebase.auth().signOut().then(function() {
          // Sign-out successful.
          console.log('sign out successful');
        }).catch(function(error) {
          // An error happened.
          console.log('sign out error');
        });
    });


    var database = firebase.database();


    $(document).on('click', '#submit', function(event) {
        event.preventDefault();
        var train = $('#train-name').val().trim();
        var destination = $('#destination').val().trim();
        var trainTime = $('#train-time').val().trim();
        var frequency = $('#frequency').val().trim();
        console.log(train);
        console.log(destination);
        console.log(trainTime);
        console.log(frequency);
        $('#train-name').val('');
        $('#destination').val('');
        $('#train-time').val('');
        $('#frequency').val('');

        database.ref("trains/").push({
            train: train,
            destination: destination,
            trainTime: moment(trainTime, "h:mm a").format("h:mm a"),
            frequency: frequency
        });
    });

    database.ref('/trains').on('value', function(snapshot) {
        var trainTable = $('#train-table').find('tbody');
        trainTable.empty();
        var keys = Object.keys(snapshot.val());
        var trains = snapshot.val();
        // console.log(keys.length);
        // console.log(now);
        for (var key in snapshot.val()) {
            var trainData = snapshot.val()[key];
            var initTime = trainData.trainTime;
            var arrivalTime = trainData.frequency;
            //calc of min away
            var initTimeConverted = moment(initTime, "hh:mm");
            var diffTime = moment().diff(moment(initTimeConverted), "minutes");
            var tRemainder = diffTime % arrivalTime;
            var tMinutesTillTrain = arrivalTime - tRemainder;
            var html = `
              <tr>
                <td class="train">${trainData.train}</td>
                <td class="destination">${trainData.destination}</td>
                <td class="frequency">${trainData.frequency}</td>
                <td class="first-train">${trainData.trainTime}</td>
                <td>${tMinutesTillTrain} minutes</td>
                <td><button type="button" class="btn btn-primary update-train" data-train-id="${key}" data-toggle="modal" data-target="#exampleModal">Update Train</button></td>
                <td><button class="btn btn-danger remove-train" data-train-id="${key}">Remove Train</button></td>
              </tr>
            `;
            trainTable.append(html);
        }

    }, function(errorObject) {
        console.log('the read failed: ' + errorObject.code);
    });

    /**
     * remove train button removes a train from the database and the user interface
     */
    $(document).on('click', '.remove-train', function(event) {
        event.preventDefault();
        var trainId = $(this).attr('data-train-id');
        database.ref("trains/").child(trainId).remove();
    });

    $(document).on('click', '.update-train', function() {
        var modal = $('#train-modal-form');
        var trainId = $(this).attr('data-train-id');
        var trainPlaceholder = $(this).parent().siblings('.train').text();
        var destinationPlaceholder = $(this).parent().siblings('.destination').text();
        var frequencyPlaceholder = $(this).parent().siblings('.frequency').text();
        var firstTrainPlaceholder = $(this).parent().siblings('.first-train').text();
        console.log(trainPlaceholder);
        $('#train-name-modal').val(trainPlaceholder);
        $('#destination-modal').val(destinationPlaceholder);
        $('#frequency-modal').val(frequencyPlaceholder);
        $('#train-time-modal').val(firstTrainPlaceholder);
        modal.attr('data-train-id', trainId);
    });

    $(document).on('click', '#submit-modal', function(event) {
        event.preventDefault();
        var trainId = $('#train-modal-form').attr('data-train-id');
        var train = $('#train-name-modal').val().trim();
        var destination = $('#destination-modal').val().trim();
        var trainTime = $('#train-time-modal').val().trim();
        var frequency = $('#frequency-modal').val().trim();
        database.ref("trains/" + trainId).update({
            train: train,
            destination: destination,
            trainTime: moment(trainTime, "h:mm a").format("h:mm a"),
            frequency: frequency
        });
        $('#train-name-modal').val('');
        $('#destination-modal').val('');
        $('#train-time-modal').val('');
        $('#frequency-modal').val('');
        $('.close').trigger('click');
    });
    

    // database.ref().on("value", function(snapshot) {
    //   // We are now inside our .on function...
    //   // Console.log the "snapshot" value (a point-in-time representation of the database)
    //   // This "snapshot" allows the page to get the most current values in firebase.
    //   console.log(snapshot.val());
    //   // Change the value of our clickCounter to match the value in the database
    //   // ___________ = snapshot.val().______________________
    //   clickCounter = snapshot.val().clickCount;
    //   // Console Log the value of the clickCounter
    //   console.log(clickCounter);
    //   // Change the HTML using jQuery to reflect the updated clickCounter value
    //   $('#click-value').text(clickCounter);
    //   // Then include Firebase error logging
    //   // HINT: }, function(errorObject)
    // }, function(errorObject) {
    //   console.log("The read failed: " + errorObject.code);
    // });





// /**
//  * [getData is a function that accepts a search parameter, this getData function makes our api call to the nytimes api to get the data returned, once that data is returned, the data is put into html and added to the page.]
//  */
// function getData(search) {
//     var searchTerm = search || 'World News'; // search term is the search entered in the form, if there is not a search term, default the search to 'World News'
//     var begin_date = $('#begin-form').val() || undefined; // save date from the value in the form
//     var end_date = $('#end-form').val() || undefined; // save date from the value in the form
//     var numberOfEntries = $('#numberOfEntries').val(); // value of the form dropdown menu for the number of entries
//     var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
//     url += '?' + $.param({ 'api-key': "94b695fed10c4a9a9cb243c55594a880" }); //add the apikey as a parameter. notice the first query parameter has the ?, every query parameter after has an & instead of a ?
//     url += `&q=${searchTerm}`; // add query param for the search term, this is defined as q=xyz, this documentation is on https://developer.nytimes.com/article_search_v2.json#/Documentation/GET/articlesearch.json

//     if (begin_date !== undefined || '' && end_date !== undefined || '') {
//         url += `&begin_date=${begin_date}`;
//         url += `&end_date=${end_date}`;
//     } // conditional for if the begin_date and end_date are not undefined or not equal to nothing (something must be entered into both form fields, if there is input in both form fields, then add on to the url the begin_date and end_date query parameters)

//     //begin ajax get request to get the article data
//     $.ajax({
//         url: url, // add url as our url created above
//         method: 'GET', // get request because we are getting data
//     }).done(function(result) {
//         // console.log(result); // console log result to see the raw data returned from the api
//         $('#results').empty(); // empty the results div before we populate it with new articles
//         for (var i = 0; i < numberOfEntries; i++) { // for loop, looping over the numberOfEntries, which is the value of the dropdown menu in the form, this variable is captured at the beginning of the getData function
//             var responseEntry = result.response.docs[i]; // store the current index as a variable of responseEntry to reuse it below
//             var title = responseEntry.headline.main; // save the title as a variable
//             var author = responseEntry.byline.original; // save the author as a variable
//             var section = responseEntry.type_of_material; // save the section as a variable
//             var pubDate = responseEntry.pub_date; // save the publish date as a variable
//             var webURL = responseEntry.web_url; // save the url as a variable
//             var theIndex = i + 1; // save the index as a variable
//             var html = ''; // create our html block for the article

//             html += `
//             <div class="article">
//                 <h3><span class="number label-primary">${theIndex}</span><strong>${title}</strong></h3>
//                 <h5>${author}</h5>
//                 <h5>Section: ${section}</h5>
//                 <h5>${pubDate}</h5>
//                 <a href="${webURL}">${webURL}</a></div>
//         		`; // the html variable is populated with the article data

//             $('#results').append(html); // the article data is added to the results div
//         }
//     }).fail(function(err) {
//         throw err; // if there is an error in the ajax call, throw an error
//     });
// }

// //Event Handlers
// $('body').on('click', '.submit', function(event) { // on click event handler for when the submit button is clicked
//     event.preventDefault();
//     var searchedTerm = $('#searchedTerm').val().trim(); // create variable of searchedTerm to hold the value of search term in the form
//     getData(searchedTerm); // pass the searchedTerm variable to the getData function, this will be the searched term in the ajax call
//     $('input').val(''); // clear the input values on the form
// });

// $('body').on('click', '.clear', function(event) { // on click even thandler for when the clear button is clicked
//     event.preventDefault();
//     $('#results').empty(); // clear the results in the results div
// });