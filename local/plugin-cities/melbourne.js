/**
 * Registers Melbourne as an audience of the js-plugins example.
 */
module.exports = function () {
    console.log("Registering 'Melbourne' as an audience");
    return {
        name: "Melbourne",
        getDisplayName: function () {
            return this.name;
        }
    };
};