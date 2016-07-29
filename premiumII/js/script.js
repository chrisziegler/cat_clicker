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
            name: 'Chuck',
            imgSrc: 'images/cat6.jpg'
                // imgAttribution:
        }
    ]
};

var controller = {
    init: function() {
        model.currentCat = model.cats[0];
        catViewList.init();
        catView.init();
    },
    getCats: function() {
        return model.cats;
    },
    getCurrentCat: function() {
        return model.currentCat;
    },
    incrementCounter: function() {
        model.currentCat.clickCount++;
        catView.render();
    },

    setCurrentCat: function(cat) {
      //cat === catCopy  === cats["i"]
      model.currentCat = cat;
      catView.render();
    }

};

var catViewList = {
    init: function() {
        this.catListEl = document.getElementById('cat-list');
        this.render();
    },
    render: function() {
        var getCats = controller.getCats();
        this.catListEl.innerHTML = '';
        var fragment = document.createDocumentFragment();
        getCats.forEach(function(cat) {
            var elem = document.createElement('li');
            elem.textContent = cat.name;
            fragment.appendChild(elem);

            elem.addEventListener('click', (function(catCopy){
              return function() {
                controller.setCurrentCat(catCopy);
              };

            })(cat));
        });
        this.catListEl.appendChild(fragment);
    }
};

var catView = {
    init: function() {

        this.catNameEl = document.getElementById('cat-name');
        this.catImgEl = document.getElementById('cat-img');
        this.countEl = document.getElementById('cat-count');

        this.catImgEl.addEventListener('click', function() {
            controller.incrementCounter();
        });

        this.render();
    },
    render: function() {
        var currentCat = controller.getCurrentCat();
        this.catNameEl.textContent = currentCat.name;
        this.catImgEl.src = currentCat.imgSrc;
        this.countEl.textContent = currentCat.clickCount;



    }
};


controller.init();
