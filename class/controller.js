class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.bindCouleurJoueur = this.bindCouleurJoueur.bind(this);
      this.view.bindCouleurJoueur(this.bindCouleurJoueur);

      this.bindgetColumn = this.bindgetColumn.bind(this);
      this.view.bindgetColumn(this.bindgetColumn);

      this.bindGetMatrix = this.bindGetMatrix.bind(this);
      this.model.bindGetMatrix(this.bindGetMatrix);

      this.bindGetClear = this.bindGetClear.bind(this);
      this.view.bindGetClear(this.bindGetClear);

      
    }
    bindCouleurJoueur (numero) {
     return this.model.CouleurJoueur(numero);
    }

    bindGetClear()
    {
      this.model.ClearMatrix();
    }

    bindgetColumn (column) {
      this.model.AddToken(column);
     }

     bindGetMatrix (matrix) {
      this.view.GetMatrix(matrix);
     }
  }
