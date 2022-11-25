/*
  PFModel
    - variables
      - dias laborales
      - horas laborales
      - programadores
      - honorarios
    - funciones ARRAY- OBJECTS
      - TEXT
      - TIPO
    - countFun 
    - pf_noajustado
    - dificultad
      - String
 */
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

  constructor(vars) {
    this.variables = vars;
  }

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
