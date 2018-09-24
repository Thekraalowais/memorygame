//array
var cards=[
  //objects
  {
    rank:"queen",
    suit: "hearts",
    cardImage: "images/queen-of-hearts.png"
  },{
    rank:"queen",
    suit: "diamonds",
    cardImage: "images/queen-of-diamonds.png"
  },{
    rank:"king",
    suit: "hearts",
    cardImage: "images/king-of-hearts.png"
  },{
    rank:"king",
    suit: "diamonds",
    cardImage: "images/king-of-diamonds.png"
  }
];
var cardsInPlay=[];
var  score=0;
var checkForMatch=function(){
    if(cardsInPlay[0] === cardsInPlay[1]){
    alert("You found a match!");
    document.getElementById("score").innerHTML = score+=100;
    console.log(score);
}else{
        alert("Sorry, try again!");
      }
}
var flipCard=function(){
  //use the this keyword to access the card that was clicked
  var cardId=this.getAttribute('data-id');
  // Displaying the Front Image
this.setAttribute('src', cards[cardId].cardImage);
console.log(cardId);
cardsInPlay.push(cards[cardId].rank);
console.log(cardsInPlay);
if(cardsInPlay.length>=2){
checkForMatch();
}
}
//Creating the Board
var createBoard=function(){
  for(var i=0 ; i<cards.length ; i++){
    //Creating Each Card
    var cardElement=document.createElement('img');
    //Adding the Card Image and ID
    cardElement.setAttribute('src','images/back.png');
    cardElement.setAttribute('data-id' , i);
    cardElement.addEventListener('click',flipCard);
    document.getElementById('game-board').appendChild(cardElement);
  }
}
createBoard();
var resetButton=function(){
  location.reload();
}
var reset=document.getElementById('reset');
reset.addEventListener('click',resetButton);
