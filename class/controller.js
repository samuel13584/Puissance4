class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.bindCouleurJoueur = this.bindCouleurJoueur.bind(this);
      this.view.bindCouleurJoueur(this.bindCouleurJoueur);

    }
    bindCouleurJoueur (numero) {
     return this.model.CouleurJoueur(numero);
    }

    // bindAddToken () {
    //   this.model.AddToken();
    //  }

    //  bindRefresh(callback)
    // {
    //   this.model.AddToken();
    // }
  }
