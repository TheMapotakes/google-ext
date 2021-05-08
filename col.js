(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    // Functions for block with type 'w' will get a callback function as the 
    // final argument. This should be called to indicate that the block can
    // stop waiting.
    ext.report = function(dialog) {
        return (dialog);
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
           [' ', 'alert %s', 'alert', ''],
        ]
    };

    // Register the extension
    ScratchExtensions.register('Report block', descriptor, ext);
})({});
