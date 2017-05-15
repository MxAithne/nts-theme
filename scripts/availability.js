hexo.extend.tag.register("availability", function(args, content)
{

	return "<p id=\"availability\"></p><script>$(\"#availability\").load(\"/sessions/availability.html\")</script>";

});