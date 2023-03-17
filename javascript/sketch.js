let btnRock, btnPaper, btnScissor, btnGame, btnGame3, btnGame5
//variable for text 
let txtWelcome, txtInsert, txtResult
txtWelcome="Welcome to my game"
txtInsert="plz choose an option"
txtResult=""

let RndNumber;
let notes="welcome to my game, plz choose your option"
let result=""

//button end the game and replay
let btnReplay, btnEndGame

//variable for computer choice 
let compOpt

function setup() {
  createCanvas(400, 400);
  RndNumber = round (random(0.5,3.5))
  
  btnGame = createButton('Single Game')
  btnGame.position (40,150)
  btnGame.style('width', '100px')
  btnGame.mousePressed(NewGame)
  
  btnGame3 = createButton('Best of Three')
  btnGame3.position(145,150)
  btnGame3.style('width', '100px')
  btnGame3.mousePressed(showRPS)
  
  btnGame5 = createButton('Best of Five')
  btnGame5.position(250,150)
  btnGame5.style('width', '100px')
  btnGame5.mousePressed(showRPS)
  
  btnRock = createButton('Rock')
  btnRock.position (50,200)
  btnRock.hide()
  btnRock.mousePressed(CompareRock)
  
  btnPaper = createButton('Paper')
  btnPaper.position(145,200)
  btnPaper.hide()
  btnPaper.mousePressed(ComparePaper)
  
  btnScissor = createButton('Scissor')
  btnScissor.position(250,200)
  btnScissor.hide()
  btnScissor.mousePressed(CompareScissor)
  
  //button for replay and end
  btnReplay = createButton('Replay')
  btnReplay.position(100,350)
  btnReplay.hide()
  btnReplay.mousePressed(NewGame)
  
  btnEnd = createButton('End')
  btnEnd.position(250,350)
  btnEnd.hide()
  
  //reset random number compOpt
  
}

function draw() {
  background("rgb(255,172,0)");
text(txtWelcome, 200,30)
text(txtInsert, 200,80)
  text(txtResult, 200,300)
  textAlign(CENTER)
  textSize(20)
  

  
  }
function showRPS()
{
  txtInsert="Choose amoung rock, paper , scissors"
  txtResult=""
  
  //hide game options
  btnGame.hide()
  btnGame3.hide()
  btnGame5.hide()
  
  //show rock paper scissors button
  btnRock.show()
  btnPaper.show()
  btnScissor.show()

  }
function CompareRock()
{
  if (compOpt == 1)
    {
      txtResult = "It's Draw !!!!! "
    }
  else if (compOpt == 2)
    {
     txtResult = "Computer Wins !!! LOOSER"
    }
  else
    {
     txtResult = "You Won !!!" 
    }
  showResult()
}
function ComparePaper()
{
  if (compOpt == 1)
    {
      txtResult = "You Won :D"
    }
  else if (compOpt == 2)
    {
     txtResult = "It's a Draw -_-"
    }
  else
    {
     txtResult = "Computer Wins :P" 
    }
  showResult()
}
function CompareScissor()
{
  if (compOpt == 1)
    {
      txtResult = "Computer Wins :P"
    }
  else if (compOpt == 2)
    {
     txtResult = "You Won :D"
    }
  else
    {
     txtResult = "It's Draw -_-" 
    }
  showResult()
}

function NewGame()
{
  compOpt =round(random(0.5,3.5))
   showRPS();
  btnReplay.hide()
  btnEnd.hide()
  
}
function showResult()
{
  btnRock.hide()
  btnPaper.hide()
  btnScissor.hide()
  
  txtInst =""
  
  btnReplay.show()
  btnEnd.show()
}
