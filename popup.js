document.addEventListener('DOMContentLoaded', function () {
	var btn = document.getElementById('send_tweet_button');
	btn.addEventListener('click', function() {
		var tweet = document.getElementById('tweet_status').value;
		alert(tweet);
	});
});



function sendTweet(tweet) {

	let base_url = 'https://api.twitter.com/1.1/statuses/update.json'

	alert(tweet)
	// ref this:
	// https://developer.twitter.com/en/docs/twitter-api/v1/tweets/post-and-engage/api-reference/post-statuses-update

	// this has what I need
	// https://medium.com/@franklsm1/using-the-twitter-api-with-javascript-5e75f7ed75a2
	$.ajax({
		type: 'POST',
		crossDomain: true,
				dataType: 'jsonp', // we want jsonp. this will over ride CORS stuff
				url: base_url,

				data: {
					'status':tweet,
				},
				beforeSend: function(xhr) {
             xhr.setRequestHeader("Authorization", "Bearer 6QXNMEMFHNY4FJ5ELNFMP5KRW52WFXN5")
        

					oauth_consumer_key : secure_keys.api_key,
					// oauth_nonce : "generated_oauth_nonce",
					// oauth_signature : "generated_oauth_signature",
					// oauth_signature_method : "HMAC-SHA1",
					// oauth_timestamp : "generated_timestamp",
					oauth_token : "oauth_token",
					oauth_version : "1.0"
				},
				success: function(jsondata) {
					console.log(jsondata);
				},
				error : function(xhr, status, error) {
					alert("Status of error message" + status + "Error is" + error);
				}   
				// error: function(){
				// 	alert("Cannot get data");
				// }
			});
}
// const form = document.getElementById('tweet-form');
// form.addEventListener('submit', sendTweet);

// curl -XPOST 
//   --url 'https://api.twitter.com/1.1/statuses/update.json?status=hello' 
//   --header 'authorization: OAuth
//   oauth_consumer_key="oauth_customer_key",
//   oauth_nonce="generated_oauth_nonce",
//   oauth_signature="generated_oauth_signature",
//   oauth_signature_method="HMAC-SHA1",
//   oauth_timestamp="generated_timestamp",
//   oauth_token="oauth_token",
//   oauth_version="1.0"'



