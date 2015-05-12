/* Some extension methods for the Duet Web Control v1.06 to allow it work on a touch screen without a keyboard
 * 
 * written by Dieter Rosch
 * 
 * licensed under the terms of the GPL v2
 * see http://www.gnu.org/licenses/gpl-2.0.html
 */

$(".btn-exit-browser").click(function() {
	// if (settings.confirmStop) {
		// showConfirmationDialog("Exit Browser", "Exit browser?", function() {
			// window.close();
		// });
	// } else {
        //If we are in firefox, we need a stupud workaround to close the window
        var is_firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        if (is_firefox)
        {
            window.open('','_parent',''); 
            //alert("hier");
        }
        window.close();
	// }
});

