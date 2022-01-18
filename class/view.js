class View {
    constructor() {
      this.initView();
    }

    // Binding.
    bindGetCNF (callback) {
      this.getCNF = callback; // On veut pouvoir demander au Model (depuis le Controller) une nouvelle Chuck Norris Fact.
    }

    initView () {
      this.token=40;
      this.space=20;
      this.col=7;
      this.ligne=6;
      this.width_tab= (this.col*(this.space  + this.token)) + this.space;
      this.height_tab= (this.ligne*(this.space + this.token)) + this.space;
      this.color="red";
      this.numero=false;
      this.canvas = document.getElementById("mycanvas");
      this.context = this.canvas.getContext("2d");
      this.canvas2 = document.getElementById("mycanvas2");
      this.context2 = this.canvas2.getContext("2d");

      document.getElementById("title").innerHTML='CONNECT 4';


      let checkAI=document.getElementById("check");
      let divcheck= document.createElement("div");
      let check=document.createElement("input");
      check.type="checkbox";
      check.id='AI';
      let labcheck= document.createElement("label");
      labcheck.innerHTML='Active AI';
      labcheck.setAttribute('for','AI');
      divcheck.appendChild(check);
      divcheck.appendChild(labcheck);
      checkAI.appendChild(divcheck);
      let opts=document.getElementById("options");
      opts.innerHTML='Starting Player';
      let div1= document.createElement("div");
      let radio1=document.createElement("input");
      radio1.type="radio";
      radio1.id='Player 1';
      let lab1= document.createElement("label");
      lab1.innerHTML='Player 1';
      lab1.setAttribute('for','Player 1');
      div1.appendChild(radio1);
      div1.appendChild(lab1);
      opts.appendChild(div1);
      let div2= document.createElement("div");
      let radio2=document.createElement("input");
      radio2.type="radio";
      radio2.id='Player 2';
      let lab2= document.createElement("label");
      lab2.innerHTML='Player 2';
      lab2.setAttribute('for','Player 2');
      div2.appendChild(radio2);
      div2.appendChild(lab2);
      opts.appendChild(div2);

      for (let i=0; i<this.col;i++)
      {
      let button1= document.createElement('button');
      button1.style.width= this.token/2 + this.space + "px";
      button1.style.height=this.token/2 + this.space + "px";
      button1.style.margin= this.space/2 + "px";
      button1.id="btn"+i;
      document.getElementById("buttons").appendChild(button1);
      button1.addEventListener('click', () => {
        this.numero=!this.numero;
        this.CouleurJoueur(this.numero);
        this.createToken(2,2,this.color);
      });}
      
      /** arc de la table puissance 4 */
      this.context.beginPath();
      this.context.moveTo(this.height_tab,this.height_tab);
      this.context.arcTo(0,this.height_tab,0,0,10);
      this.context.arcTo(0,0,this.height_tab,0,10);
      this.context.arcTo(this.width_tab,0,this.height_tab,this.height_tab,10);
      this.context.arcTo(this.width_tab,this.height_tab,0,this.height_tab,10);
      this.context.fillStyle="blue";
      this.context.fill();
      this.context.closePath();
      
      this.context2.beginPath();
      this.context2.moveTo(this.height_tab,this.height_tab);
      this.context2.arcTo(0,this.height_tab,0,0,10);
      this.context2.arcTo(0,0,this.height_tab,0,10);
      this.context2.arcTo(this.width_tab,0,this.height_tab,this.height_tab,10);
      this.context2.arcTo(this.width_tab,this.height_tab,0,this.height_tab,10);
      this.context2.fillStyle="white";
      this.context2.fill();
      this.context2.closePath();

      /** boucle création de trous jetons */
      this.context.globalCompositeOperation = "destination-out";
      for(let j = 0; j< this.ligne ; j++){
        for(let i = 0; i< this.col ; i++){
          this.context.beginPath();
          this.context.arc( ((this.token + this.space)*i) + (this.space*2),(this.height_tab- this.token/2 - this.space) - (this.token+ this.space)*j,this.token/2,0,2* Math.PI);
          this.context.fillStyle = "white";
          this.context.fill();
          this.context.closePath();
        }
      }
  }
   createToken(column,row,color)
  {
    console.log("create token");
    //faire une condition pour voir si un élément existe déjà dans la colonne
    this.context2.globalCompositeOperation = "source-over";
    this.context2.beginPath();
    this.context2.fillStyle=color;
    this.context2.arc( ((this.token + this.space)*column) + (this.space*2),(this.height_tab- this.token/2 - this.space) - (this.token+ this.space)*row,this.token/2,0,2* Math.PI);
    this.context2.fill();
    this.context2.closePath();

    // this.context2.globalCompositeOperation = "source-over";
    // this.context2.beginPath();
    // this.context2.fillStyle="white";
    // this.context2.arc( ((this.token + this.space)*column) + (this.space*2),(this.height_tab- this.token/2 - this.space) - (this.token+ this.space)*(row-1),this.token/2,0,2* Math.PI);
    // this.context2.fill();
    // this.context2.closePath();
  }
  
    displayCNF (cnf_value) {
      if (this.p_tag) {
        this.p_tag.innerHTML = cnf_value;
      }
    }

    CouleurJoueur(numero)
    {
      if(numero)
      {
        this.color= "red";
      }
      else
      {
        this.color= "yellow";
      }
      console.log(numero);
      
    }
  }

