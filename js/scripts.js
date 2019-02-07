$(document).ready(function() {
  $("#blanks form").submit(function(event) {
    var person1Input = $("input#person1").val();
    var placeInput = $("input#place").val();
    var verbInput= $("input#verb").val();
    var adjectiveInput = $("input#adjective").val();


    $(".person1").text(person1Input);
    $(".place").text(placeInput);
    $(".verb").text(verbInput);
    $(".adjective").text(adjectiveInput);


    $("#story").show();

    event.preventDefault();
  });
});
