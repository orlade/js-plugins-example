/**
 * Registers John Smith as an audience of the js-plugins example.
 */
module.exports = function (data, host, options) {
    if (host && host.debug) {
        console.log("Registering 'John Smith' as an audience");
    }
    return {
        firstName: "John",
        lastName: "Smith",
        getDisplayName: function () {
            return this.firstName + ' ' + this.lastName;
        }
    };
};