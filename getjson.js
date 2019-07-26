$(document).ready(function(){
	$.getJSON("team.json", function(data) {
		$.each(data, function() {
			$.each(this, function(key, value) {
				$("#team").append(
                    "<img src='"+ value.image + "'>" + "<br>" +
					"Name: " + value.full_name + "<br>" + 
					"Title: " + value.title + "<br>" + 
					"Bio: " + value.bio + "<br><br>"
				);
			});
		}); 
	});
});