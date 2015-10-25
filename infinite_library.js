// TODO: learn how to import this
// from cartesian import cartesianN_repeatSameSet

//  all candidate book characters
var pool = [];
for (var i=0;i<128; i++){
    pool.concat(String.fromCharCode(i));
}
var cardPool = pool.length;

var floor, ceil, log, pow;
floor = Math.floor;
ceil = Math.ceil;
log = Math.log;
pow = Math.pow;
function bookLength(i){
    // gives you the length of book n
    if( [0,1].indexOf(i) > -1 ){ return i;} // 0 and 1 do not play nice w log
    else {
        return floor(ceil(log(i)/log(cardPool)));
    }
}


function firstBookLengthN(n){
    // returns the index of the first book of length n
    // determine how many books with len < lenBook exist
    var nShorter = 0;
    for(var len=0; len<n; len++){
       nShorter += pow(cardPool,len);
    }
    return nShorter;  // no need for +1 bc of the empty book
}


function generateBook(i){
    // generate the i'th book in the infinite library!
    var lenBook = bookLength(i)
    if(lenBook == 0){return '';}  // the zero'th book is the empty book :)
    // we're looking for the nThisLength'th book of this length.
    var iThisLength = i - firstBookLengthN(lenBook);
    var book = cartesianN_repeatSameSet(pool, lenBook, iThisLength);
    book = book.join('');  // concat lochars into string
    return book;
}


function getIndex(book){
    // get the index of the book (fine; string if you wanna be a bummer like that)
    // in the infinite library
    var bookLen = book.length;
    var letters = book.split('');  // string to lochars
    var index = 0;
    // how far we need to move before current letter changes
    var blockSize = pow(cardPool, bookLen-1);
    for (var i=0; i<letters.length; i++){
        var il = pool.indexOf(i) + 1; // which elt in our alphabet is this letter?
        index += blockSize * il;
        blockSize /= cardPool;
    }
    return index;
}
