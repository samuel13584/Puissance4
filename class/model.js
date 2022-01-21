class Model {
    constructor() {
      this.matrix=[[]];
      this.numero=false;
    }
  
    // Binding.
    bindDisplayCNF (callback) {
      // Définition d'une nouvelle propriété pouvant être utilisée à partir d'une instance de Model.
      this.DisplayCNF = callback; // On veut pouvoir actualiser la View (depuis le Controller) quand nous récupérons les données.
    }
    bindCouleurJoueur (callback) {
      this.CouleurJoueur=callback;
     }

    getCNF () {
      fetch(this.URL)
        .then(response => response.json())
        .then(response => {
          let text = 'No Chuck Norris Fact found.';
          if (response.value) {
            text = response.value;
          }
          this.DisplayCNF(text);
        })
        .catch(error => {
          console.log("Error : " + error);
        });
    }
    // ImplementMatrix(column,row)
    // { 

    //   if(this.matrix[row][column]==0)
    //   {
    //     this.matrix[row][column]=1;
    //   }
    //   else
    //   {
    //     this.ImplementMatrix(column,row-1);
    //   }
      
    // }

    CouleurJoueur(numero)
    {
    // console.log("je passe dans model couleurjoueur" + " " + this.matrix[0][0]);
      if(numero)
      {
        return "red";
      }
      else
      {
        return "yellow";
      }
    }
  }