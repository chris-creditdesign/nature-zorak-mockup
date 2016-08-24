$(document).ready(function(){
    $("#working").typed({
      strings: ["Prognosticating...."],
      typeSpeed: 0,
      showCursor: false,
      callback: function() {$("#working_complete").show();}
    });
});
