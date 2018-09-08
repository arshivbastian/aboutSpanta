// Write your JavaScript code.
var notification = $("#notification").kendoNotification({
    position: {
        pinned: true,
        top: null,
        right: null,
        left: 30,
        button:30
    },
    autoHideAfter:5000,
  
    templates: [{
        type: "info",
        template: $("#emailTemplate").html()
    }, {
        type: "error",
        template: $("#errorTemplate").html()
    }, {
        type: "success",
        template: $("#successTemplate").html()
    }, {
        type: "warning",
        template: $("#warningTemplate").html()
    }
               ]

}).data("kendoNotification");


