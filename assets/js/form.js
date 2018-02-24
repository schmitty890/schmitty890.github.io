(function() {
	var formFunctionality = (function () {
	  
	  var email = function() {
		$('.email').blur(function() {
		    var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
		    if (testEmail.test(this.value)) {
				console.log('passed');
				$('.email-message').removeClass('email-error').addClass('email-success').html('your email is valid.');
		    } else {
 				console.log('failed');
 				$('.email-message').removeClass('email-success').addClass('email-error').html('your email is not valid.');
		    }
		});
	  };

	  return {
	    init: email
	  }
	})();

	formFunctionality.init();
})();
