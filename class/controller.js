class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.bindCouleurJoueur = this.bindCouleurJoueur.bind(this);
      this.view.bindCouleurJoueur(this.bindCouleurJoueur);

      // this.bindAddToken = this.bindAddToken.bind(this);
      // this.model.bindAddToken(this.bindAddToken);

      // this.bindRefresh = this.bindRefresh.bind(this);
      // this.model.bindRefresh(this.bindRefresh);

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