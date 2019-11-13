/* Magic Mirror
 * Module: MMM-TV

 *
 * By Mykle1 - MIT Licensed
 *
 */

Module.register("MMM-TV",{

	defaults: {
			height:"400px",
			width:"600px",
	},

	getStyles: function() {
        return ["MMM-TV.css"];
    },


	getDom: function() {


		var iframe = document.createElement("IFRAME");
		iframe.classList.add("iframe");
		iframe.style = "border:none";
		iframe.width = this.config.width;
		iframe.height = this.config.height;
		type="text/javascript";

        iframe.src="http://100widgets.com/js_data.php?id=241";

		return iframe;
	},

	 /////  Add this function to the modules you want to control with voice //////

    notificationReceived: function(notification, payload) {
        if (notification === 'HIDE_TV') {
            this.hide(1000);
        }  else if (notification === 'SHOW_TV') {
            this.show(1000);
        }

    },

});
