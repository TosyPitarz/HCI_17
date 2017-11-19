$(document).ready(function(){

	$(".movie-image").hover(function(){
		$(this).find(".play").show();

	},
	function()
	{
		$(this).find(".play").hide();
	});

// TODO: fix old movie title on the play button
	$(".blink").focus(function() {
            if(this.title==this.value) {
                this.value = '';
            }
        })
        .blur(function(){
            if(this.value=='') {
                this.value = this.title;
			}
		});
});
