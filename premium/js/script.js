document.addEventListener('DOMContentLoaded', function(event) {
    var cats = [{
            name: 'Charlie',
            src: 'images/cat.jpg'
        },

        {
            name: 'Muffin',
            src: 'images/cat2.jpg'
        },

        {
            name: 'Stash',
            src: 'images/cat3.jpg'
        },

        {
            name: 'Food Eater',
            src: 'images/cat4.jpg'
        },

        {
            name: 'Groundskeeper Willy',
            src: 'images/cat5.jpg'
        },

        {
            name: 'Mike',
            src: 'images/cat6.jpg'
        }
    ];



    for (var i = 0; i < cats.length; i++) {
        var navCats = cats[i].name;
        // console.log(navCats);
        var catNavDiv = document.createElement('div');
        catNavDiv.textContent = navCats;
        var dynamicCats = cats[i].src;
    

        // sweet for-loop closure, outer function holds a copy of our key iterated variables
        // so that it returns the inner function in its own execution context
        catNavDiv.addEventListener('click', (function(navCatsCopy, dynamicCatsCopy) {
            return function() {
                //replace with load selected cat into #clicker
                 //alert('You clicked ' + navCatsCopy);
                var clickPic = document.getElementById('clicker');
                clickPic.innerHTML = '<img class="swap-cats" src = ' + dynamicCatsCopy + ' alt = ' + navCatsCopy + '>'

                // console.log(clickPic); //shows successful swap of innerHTML

            };
        })(navCats, dynamicCats));
        document.getElementById('catlist').appendChild(catNavDiv);


    };


    // for (var i = 0; i < cats.length; i++)  {
    //   var dynamicCats = cats[i].src;
    //   console.log(dynamicCats);
    //   var clickPic = document.getElementById('#clicker');
    //   clickPic.innerHTML = '<img class="swap-casts" src = ' + dynamicCats + ' alt = "cat pic">'
    // }


});









// document.addEventListener("DOMContentLoaded", function(event) {
//     var counter = 0, counter2 = 0;
//     var cat = document.getElementById('cat');
//     var catName = document.querySelector('.cat-name');
//     var cat2 = document.getElementById('cat2');
//     var cat2Name = document.querySelector('.cat2-name');
//     /*The following could also be coded:
//       el.addEventlistener("click", myFunction);
//       function myFunction() {
//         document.getElementById('count').innerHTML = "You clicked me!";
//     }
//     */
//
// // add cat names w/code
//    catName.innerText = 'Stash';
//    cat2Name.innerText = 'Food Eater';
//     cat.addEventListener("click", function() {
//         counter++;
//       var updateCount = document.getElementById('count');
//       updateCount.innerHTML = '<span>' + 'You clicked on me! I\'ve now been clicked this many times: &nbsp' + '<b>' + counter + '</b>' + '</span>';
//     });
//     cat2.addEventListener("click", function() {
//       counter2++;
//       var updateCount2 = document.getElementById('count2');
//       updateCount2.innerHTML = '<span>' + 'Knew I was better than that other cat! I\'ve now been clicked this many times: &nbsp' + '<b>' + counter2 + '</b>' + '</span>';
//     })
// });
