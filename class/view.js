class View {
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
      let div = document.querySelector(`#${this.div_id}`);
      // this.p_tag = document.createElement('p');
      // this.p_tag.innerHTML = 'Click to display a new Chuck Norris Fact.';
      // let button = document.createElement('button');
      // button.innerHTML = 'New Chuck Norris Fact';
      // button.addEventListener('click', () => {
      //   this.getCNF();
      // });
      // div.appendChild(this.p_tag);
      // div.appendChild(button);
      let token=40;
      let space=20;
      let col=7;
      let ligne=6;
      let width_tab= (col*(space  + token)) + space;
      let height_tab= (ligne*(space + token)) + space;
      let canvas = document.getElementById("mycanvas");
      let context = canvas.getContext("2d");

      /** arc de la table puissance 4 */
      context.beginPath();
      context.moveTo(height_tab,height_tab);
      context.arcTo(0,height_tab,0,0,10);
      context.arcTo(0,0,height_tab,0,10);
      context.arcTo(width_tab,0,height_tab,height_tab,10);
      context.arcTo(width_tab,height_tab,0,height_tab,10);
      context.fillStyle="blue";
      context.fill();
      context.beginPath();


      /** boucle création de trous jetons */
      context.globalCompositeOperation = "destination-out";
      for(let j = 0; j< ligne ; j++){
        for(let i = 0; i< col ; i++){
          context.beginPath();
          context.arc( ((token + space)*i) + (space*2),(height_tab- token/2 - space) - (token+ space)*j,token/2,0,2* Math.PI);
          context.fillStyle = "white";
          context.fill();
          context.closePath();
        }
      }
  }
  
    displayCNF (cnf_value) {
      if (this.p_tag) {
        this.p_tag.innerHTML = cnf_value;
      }
    }
    
  }