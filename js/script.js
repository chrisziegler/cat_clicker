//cat clicker functionality here

document.addEventListener("DOMContentLoaded", function(event) {
    var counter = 0;
    var el = document.getElementById('cat');
    /*The following could also be coded:
      el.addEventlistener("click", myFunction);
      function myFunction() {
        document.getElementById('count').innerHTML = "You clicked me!";
    }
    */

    el.addEventListener("click", function() {
        counter++;
      var updateCount = document.getElementById('count');
      updateCount.innerHTML = '<span>' + 'You clicked on me! I\'ve now been clicked this many times: &nbsp' + '<b>' + counter + '</b>' + '</span>';

        console.log(updateCount);






    });

});
