$(document).ready(function() {
  $("#blanks form").submit(function(event) {

    var blanks = ["person1", "place", "verb", "adjective"];
    blanks.forEach(function(blank) {
      var userInput = $("input#" + blank).val();
      $("." + blank).text(userInput);
    });

    var elements = ["h1", "p", "label", "input", "button"];
    elements.forEach(function(element) {
      $(element).click(function() {
        alert("This is a " + element + ".");
      });
    });

    $("#story").show();

    event.preventDefault();
  });
});
