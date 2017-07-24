var row = Math.round(document.body.clientWidth / 11.1);
var col = Math.round(window.innerHeight / 11.1);

function getRandomColor(){
  var color='';

  while(color.length<6) {
    color = Math.floor(Math.random() * 16777215).toString(16);
  }

  return '#'+color;
};

  for (var i = 0; i < (row + col); i++) {
    if (i % 2 === 0) {
    var div = document.createElement('div');
      document.body.appendChild(div)
        div.className = 'checkerboard';
        div.style.width = '11.1%';
        div.style.float = 'left';
        div.style.paddingBottom = '11.1%';
        div.style.background = 'linear-gradient(45deg, #C70039, #FF5733)';
        div.style.backgroundRepeat = 'repeat';
    } else {
      var div = document.createElement('div');
        document.body.appendChild(div)
          div.className = 'checkerboard';
          div.style.width = '11.1%';
          div.style.float = 'left';
          div.style.paddingBottom = '11.1%';
          div.style.background = 'linear-gradient(45deg, #FF5733, #C70039)';
          div.style.backgroundRepeat = 'repeat';
    }
  }
