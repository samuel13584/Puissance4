class Model {
    constructor() {
      this.numero=false;
      this.width = 7
      this.height = 6
      this.color="red";
      this.CreateMatrix();
      
  }
    
    bindCouleurJoueur (callback) {
      this.CouleurJoueur=callback;
     }

    bindAddToken(callback)
    {
      this.AddToken=callback;
    }
    bindRefresh(callback)
    {
      this.Refresh()=callback;
    }

    CreateMatrix(){
      this.tableau = new Array(this.width);
          for (let colonne = 0; colonne < this.width; colonne++) {
              let column = new Array(this.height);
              for (let ligne = 0; ligne < this.height; ligne++) {
                column[ligne] = null;
              }
              this.tableau[colonne] = column;
          }
    }


    AddToken(column,row)
    {

      if(this.color=="red")
      {
        while (this.tableau[column][row]!=null|| row<this.height-1 )
        {
          this.tableau[column][row]==1;
          row++;
        }
      }
      if(this.color=="yellow")
      {
        while (this.tableau[column][row]!=null || row<this.height-1 )
        {
          this.tableau[column][row]==2;
          row++;
        }
      }
      this.Refresh();
    }

    ClearMatrix()
    {
      for(let i=0;i<this.width;i++){
        for(let j=0;j<this.height;j++){
          this.tableau[column][row]==0; 
        }
      }
    }

    CouleurJoueur(numero)
    {
      if(numero)
      {
        this.color="red";
        return this.color;
      }
      else
      {
        this.color="yellow";
        return this.color;
      }
    }
}
