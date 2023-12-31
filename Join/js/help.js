/**
Redirects the user to the specified destination
@param {string} destination - The URL of the destination page
*/
function routeToPage(destination) {
    window.location.href = destination;
}


/**
 * @description This function is used to show the preloader for 1.5 seconds
 */
setTimeout(function () {
    document.getElementById('preloader').style.display = 'none';
}, 1500);


