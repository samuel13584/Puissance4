class View2 {
    constructor(div_id) {
      this.div_id = div_id;
      this.p_tag;
      this.initView();
    }
// Binding.
bindGetCNF (callback) {
    this.getCNF = callback; // On veut pouvoir demander au Model (depuis le Controller) une nouvelle Chuck Norris Fact.
  }

  initView () {

    let tokensRadius = 45;
    let spaceBetween = 10;
    let playerColor = "red";
    let buttonEnabled = true;
    let grid_width = 7(tokensRadius+spaceBetween)2;
    let grid_height = 6(tokensRadius+spaceBetween)2;



    let grid = document.createElement("canvas");
    grid.id="grid";
    grid.width=grid_width;
    grid.height=grid_height
    grid.style.zIndex="1";
    document.getElementById("gameboard_body").appendChild(grid);
    document.getElementById("gameboard_body").style.height=grid_height+"px";

    var ctx = grid.getContext("2d");


    ctx.beginPath();
    ctx.moveTo(grid_height,grid_height);
    ctx.arcTo(0,grid_height,0,0,10);
    ctx.arcTo(0,0,grid_height,0,10);
    ctx.arcTo(grid_width,0,grid_height,grid_height,10);
    ctx.arcTo(grid_width,grid_height,0,grid_height,10);
    ctx.fillStyle = "#0030da";
    ctx.fill();
    ctx.beginPath();


    ctx.globalCompositeOperation = "destination-out";
    for(let j = 0; j< 6 ; j++){
        for(let i = 0; i< 7 ; i++){
            ctx.beginPath();
            ctx.arc(spaceBetween+ tokensRadius + (tokensRadius2+ spaceBetween2)i, grid_height-tokensRadius-spaceBetween - (tokensRadius2+ spaceBetween2)j, tokensRadius, 0, 2 * Math.PI, false);
            ctx.fillStyle = "red";
            ctx.fill();
            ctx.closePath();

        }
    } 
    }
}