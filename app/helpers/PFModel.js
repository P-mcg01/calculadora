export class PFModel {
  variables = {};
  funciones = [];
  countFun = {
    EE: 0,
    SE: 0,
    CE: 0,
    ALI: 0,
    ALE: 0,
  };
  factor_ajuste = 0;
  ponderacion = {
    EE: 0,
    SE: 0,
    CE: 0,
    ALI: 0,
    ALE: 0,
  };

  _complejidad = {
    simple: {
      EE: 4,
      SE: 3,
      CE: 4,
      ALI: 3,
      ALE: 7,
    },
    medio: {
      EE: 4,
      SE: 5,
      CE: 4,
      ALI: 10,
      ALE: 7,
    },
    complejo: {
      EE: 6,
      SE: 7,
      CE: 6,
      ALI: 15,
      ALE: 10,
    },
  };
  _PFNA = 0;
  _PFA = 0;
  _persona_hora = 0;
  _esfuerzo = 0;
  _duracionHoras = 0;
  _duracionMeses = 0;
  _costo = 0;

  constructor(vars) {
    this.variables = vars;
  }

  getPonderacion() {
    for (let item in this.countFun) {
      switch (this.variables.dif) {
        case "Simple":
          this.ponderacion[item] =
            this.countFun[item] * this._complejidad.simple[item];
          break;
        case "Medio":
          this.ponderacion[item] =
            this.countFun[item] * this._complejidad.medio[item];
          break;
        case "Complejo":
          this.ponderacion[item] =
            this.countFun[item] * this._complejidad.complejo[item];
          break;
      }
    }
  }

  getPFNA() {
    let valores = Object.values(this.ponderacion);

    this._PFNA = valores.reduce((acumulador, acutal) => {
      return acumulador + acutal;
    }, 0);
  }

  // metodos
  getPFA() {
    this._PFA = Math.round(this._PFNA * (0.65 + 0.01 * this.factor_ajuste));
  }

  getPersonaHora() {
    this._persona_hora = 1 / this.variables["hrs_lab"];
  }

  getEsfuerzo() {
    this.getPFA();
    this._esfuerzo = this._PFA / this._persona_hora;
  }

  getDuracionHoras() {
    this._duracionHoras = Math.ceil(
      this._esfuerzo / parseInt(this.variables["devs"])
    );
  }

  getDuracionMeses() {
    this._duracionMeses = Math.ceil(
      this._duracionHoras /
        (parseFloat(this.variables["dias_lab"]) *
          parseFloat(this.variables["hrs_lab"]))
    );
  }

  getCosto() {
    this._costo =
      parseInt(this.variables["devs"]) *
      this._duracionMeses *
      parseInt(this.variables["sueldo"]);
  }

  calcular() {
    this.getPFA();
    this.getPersonaHora();
    this.getEsfuerzo();
    this.getDuracionHoras();
    this.getDuracionMeses();
    this.getCosto();
  }

  // GETTERS SETTERS
  get variables() {
    return this.variables;
  }

  set variables(vars) {
    this.variables = vars;
  }

  get funciones() {
    return this.funciones;
  }

  set funciones(fun) {
    this.funciones = fun;
  }

  get countFun() {
    return this.countFun;
  }

  get factor_ajuste() {
    return this.factor_ajuste;
  }

  set factor_ajuste(factor) {
    this.factor_ajuste = factor;
  }
}
