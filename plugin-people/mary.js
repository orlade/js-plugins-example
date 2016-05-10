/**
 * Registers Mary Jane as an audience of the js-plugins example.
 */
module.exports = function (data, host, options) {
    if (host && host.debug) {
        console.log("Registering 'Mary Jane' as an audience");
    }
    return {
        firstName: "Mary",
        lastName: "Jane",
        getDisplayName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };
};