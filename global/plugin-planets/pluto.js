/**
 * Registers Pluto as an audience of the js-plugins example.
 */
module.exports = function (data, host, options) {
    if (host && host.debug) {
        console.log("Registering 'Pluto' as an audience");
    }
    return {
        getDisplayName: function () {
            return "Pluto";
        }
    };
};