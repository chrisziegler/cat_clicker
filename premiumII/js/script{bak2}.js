var model = {
    //currentCat will hold a value like mode.cats[1]
    currentCat: null,
    cats: [{
            clickCount: 0,
            name: 'Charlie',
            imgSrc: 'images/cat.jpg'
                // imgAttribution: 'https://www.flickr.com/photos/awesomeCatPhotog'
        },

        {
            clickCount: 0,
            name: 'Muffin',
            imgSrc: 'images/cat2.jpg'
                // imgAttribution:
        },

        {
            clickCount: 0,
            name: 'Stash',
            imgSrc: 'images/cat3.jpg'
                // imgAttribution:
        },

        {
            clickCount: 0,
            name: 'FoodEater',
            imgSrc: 'images/cat4.jpg'
                // imgAttribution:
        },

        {
            clickCount: 0,
            name: 'Groundskeeper Willy',
            imgSrc: 'images/cat5.jpg'
                // imgAttribution:
        },

        {
            clickCount: 0,
            name: 'Mikey',
            imgSrc: 'images/cat6.jpg'
                // imgAttribution:
        }
    ]
};

var octopus = {
  init: function() {
    model.currentCat = model.cats[0];
    catListView.init();
    catView.init();
  },
  getCats: function() {
    return model.cats;
  },
  incrementCounter: function() {
    model.currentCat.clickCount++;
    catView.render();
  },
  getCurrentCat: function() {
    return model.currentCat;
  }


};

var catView = {
  init: function() {
      // store pointers to our DOM elements for easy access later
      // place on object instead of using as local variables in init
      this.catElem = document.getElementById('cat');
      this.catNameElem = document.getElementById('cat-name');
      this.catImageElem = document.getElementById('cat-img');
      this.countElem = document.getElementById('cat-count');

      this.catImageElem.addEventListener('click', function(){
        octopus.incrementCounter();
      });
      this.render();
  },

  render: function(){
  var currentCat = octopus.getCurrentCat();
  this.catNameElem.textContent = currentCat.name;
  this.countElem.textContent = currentCat.clickCount;
  this.catImageElem.src = currentCat.imgSrc;
        console.log(this.catImageElem.src);
  }

};

var catListView = {
  init: function(){
    this.catListElem = document.getElementById('cat-list');
    this.render();
  },
  render: function(){
    var cat, elem, i;
    this.catListElem.innerHTML = '';
    var cats = octopus.getCats();
    var fragment = document.createDocumentFragment();

    cats.forEach(function(cat){
        elem = document.createElement('li');
        elem.textContent = cat.name;
        fragment.appendChild(elem);

    });
  this.catListElem.appendChild(fragment);
    // for(i = 0; i < cats.length; i++) {
    //   cat = cats[i];
    //   elem = document.createElement('li');
    //   elem.textContent = cat.name;
    //   fragment.appendChild(elem);
    // }
    // this.catListElem.appendChild(fragment);
    }
  };
  octopus.init();
