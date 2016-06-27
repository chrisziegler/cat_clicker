//cat clicker functionality here

document.addEventListener("DOMContentLoaded", function(event) {
    var counter = 0, counter2 = 0;
    var cat = document.getElementById('cat');
    var catName = document.querySelector('.cat-name');
    var cat2 = document.getElementById('cat2');
    var cat2Name = document.querySelector('.cat2-name');
    /*The following could also be coded:
      el.addEventlistener("click", myFunction);
      function myFunction() {
        document.getElementById('count').innerHTML = "You clicked me!";
    }
    */

// add cat names w/code
   catName.innerText = 'Stash';
   cat2Name.innerText = 'Food Eater';
    cat.addEventListener("click", function() {
        counter++;
      var updateCount = document.getElementById('count');
      updateCount.innerHTML = '<span>' + 'You clicked on me! I\'ve now been clicked this many times: &nbsp' + '<b>' + counter + '</b>' + '</span>';
    });
    cat2.addEventListener("click", function() {
      counter2++;
      var updateCount2 = document.getElementById('count2');
      updateCount2.innerHTML = '<span>' + 'Knew I was better than that other cat! I\'ve now been clicked this many times: &nbsp' + '<b>' + counter2 + '</b>' + '</span>';
    })
});
