hexo.extend.tag.register("contact_form", function(args, content)
{

  return "<form id='contactForm' action='http://wheelednomad.eu/mail' method='POST'> \
	<div><label for='contactAlias'>Alias:</label><input id='contactAlias' type='text' name='name' placeholder='What should I call you?'></div> \
	<div><label for='contactEmail'>Email:</label><input id='contactEmail' type='email' name='_replyto' placeholder='What&apos;s your email address?'></div> \
	<div><textarea id='contactMessage' name='message' placeholder='Your message'></textarea></div> \
	<div><input id='contactSumbit' type='submit' value='Send'><div>\
	</form>"

});