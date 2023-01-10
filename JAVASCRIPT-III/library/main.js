class Media {

    // constructor
    constructor(title) {
        this._title = title;
        this._isCheckOut = false;
        this._ratings = [];
    }

    // getter
    get title() {
        return this._title;
    }
    get isCheckOut() {
        return this._isCheckOut;
    }
    get ratings() {
        return this._ratings;
    }
   

    // setter
    set isCheckOut(value) {
        this._isCheckOut = value;
    }

    // toggle method
    toggleCheckOutStatus() {
        this.isCheckOut = !this.isCheckOut;
    }

    // find the average rating
    getAverageRating() {
        const sumRating = this.ratings.reduce((currentSum, rating) => 
            currentSum + rating, 0
        );
        return sumRating / this.ratings.length;
    }

    // add rating 
    addRating(value) {
        this.ratings.push(value);
    }

}

class Book extends Media {
    constructor(author, pages, title) {
        super(title);
        this._author = author;
        this._pages = pages;
    }
    //getter
    
    get author() {
        return this._author;
    }
    get page() {
        return this._page;
    }
}

class Movie extends Media{
    constructor(director, title, runTime ) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    // getter 
    get director() {
        return this._director;
    }
    get runTime() {
        return this._runTime;
    }
}

class CD {
    constructor(title, rating, )
}

// Book object (History of EveryThing)
const historyOfEverything = new Book('Bill Bryson', 'A short History of Nearly Everything', 544);

historyOfEverything.toggleCheckOutStatus();

console.log(historyOfEverything.isCheckOut);

historyOfEverything.addRating(4,5,5);

console.log(historyOfEverything.getAverageRating());

// Movie Object 

const speed = new Movie('Jan de Bont', 'Speed', 116);

console.log(speed.isCheckOut);

speed.addRating(1,1,5);

console.log(speed.getAverageRating());