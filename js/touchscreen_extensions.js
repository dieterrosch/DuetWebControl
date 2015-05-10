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
        window.close();
	// }
});

