import cocomo from "./cocomo.js";

export class CocomoModel {
  constructor(flujoES, honorario, katex) {
    if (!Number.isInteger(flujoES)) {
      Math.trunc(flujoES);
    }
    if (flujoES < 0) {
      flujoES *= -1;
    }

    if (honorario < 0) {
      honorario *= -1;
    }

    this.flujoES = flujoES;
    this.honorario = honorario;
    this.katex = katex;

    this._submodel = null;
    this._ldc = null;
    this._mldc = null;
    this._esfuerzo = null;
    this._tiempoDes = null;
    this._personal = null;
    this._produccion = null;
    this._costo = null;
  }

  ldc() {
    this._ldc = 90 * this.flujoES;
  }

  mldc() {
    this._mldc = this._ldc / 1000;
  }

  getSubmodelo() {
    if (this._ldc < 50000) {
      this._submodel = cocomo.organico;
    } else if (this._ldc < 300000) {
      this._submodel = cocomo.semiEncajado;
    } else if (this._ldc >= 300000) {
      this._submodel = cocomo.empotrado;
    }
  }

  esfuerzo() {
    this._esfuerzo = this._submodel.a * Math.pow(this._mldc, this._submodel.b);
  }

  tiempoDesarrollo() {
    this._tiempoDes =
      this._submodel.c * Math.pow(this._esfuerzo, this._submodel.d);
  }

  personalNecesario() {
    this._personal = this._esfuerzo / this._tiempoDes;
  }

  produccion() {
    this._produccion = this._ldc / this._esfuerzo;
  }

  costo() {
    this._costo = this._esfuerzo * this.honorario;
  }

  calcular() {
    this.ldc();
    this.mldc();
    this.getSubmodelo();
    this.esfuerzo();
    this.tiempoDesarrollo();
    this.personalNecesario();
    this.produccion();
    this.costo();

    return {
      submodelo: this._submodel,
      es: this.flujoES,
      honorario: this.honorario,
      ldc: this._ldc,
      mldc: this._mldc,
      esfuerzo: this._esfuerzo,
      tiempoDes: this._tiempoDes,
      personal: this._personal,
      produccion: this._produccion,
      costo: this._costo,
    };
  }

  toFixed(n, fixed) {
    return `${n}`.match(new RegExp(`^\\d+(?:\.\\d{0,${fixed}})?`))[0];
  }

  renderFormula(id) {
    const $procedimiento = document.getElementById("process");
    const option = {
      displayMode: false,
      output: "html",
    };

    switch (id) {
      case "c-ldc":
        this.katex.render(
          `\\mathcal{LDC = P \\cdot flujoE/S} \\newline
           \\mathcal{LDC = 90 \\cdot ${this.flujoES}} \\newline
           \\mathcal{LDC = ${this._ldc} \\enspace ldc} \\newline`,
          process,
          option
        );
        break;
      case "c-mldc":
        this.katex.render(
          `\\mathcal{\\small{MLDC} = \\large\\frac{LDC}{1000}} \\newline
           \\mathcal{\\small{MLDC} = \\large\\frac{${this._ldc}}{1000}} \\newline
           \\mathcal{\\small{MLDC} = ${this._mldc} \\enspace kldc}`,
          process,
          option
        );
        break;
      case "c-e":
        this.katex.render(
          `\\mathcal{E = a \\cdot (MLDC)^b} \\newline
           \\mathcal{E = ${this._submodel.a} \\cdot (${this._mldc})^{${
            this._submodel.b
          }}} \\newline
           \\mathcal{E = ${this._submodel.a} \\cdot ${this.toFixed(
            Math.pow(this._mldc, this._submodel.b),
            6
          )}} \\newline
           \\mathcal{E = ${this.toFixed(this._esfuerzo, 6)}} \\newline
           \\mathcal{E \\approx ${Math.ceil(this._esfuerzo)}
           \\enspace \\large\\frac{persona}{mes} }`,
          process,
          option
        );
        break;
      case "c-td":
        this.katex.render(
          `\\mathcal{TD = c \\cdot (E)^d} \\newline
           \\mathcal{TD = ${this._submodel.c} \\cdot (${this.toFixed(
            this._esfuerzo,
            6
          )})^{${this._submodel.d}}} \\newline
           \\mathcal{TD = ${this._submodel.c} \\cdot ${this.toFixed(
            Math.pow(this._esfuerzo, this._submodel.d),
            6
          )}} \\newline
           \\mathcal{TD = ${this.toFixed(this._tiempoDes, 6)}} \\newline
           \\mathcal{TD \\approx ${Math.ceil(
             this._tiempoDes
           )} \\enspace meses}`,
          process,
          option
        );
        break;
      case "c-pn":
        this.katex.render(
          `\\mathcal{PN = \\large\\frac{E}{TD}} \\newline
           \\mathcal{PN = \\large\\frac{${this.toFixed(
             this._esfuerzo,
             6
           )}}{${this.toFixed(this._tiempoDes, 6)}}} \\newline
           \\mathcal{PN = ${this.toFixed(this._personal, 6)}} \\newline
           \\mathcal{PN \\approx ${Math.ceil(
             this._personal
           )} \\enspace \\large\\frac{programador}{mes} }`,
          process,
          option
        );
        break;
      case "c-p":
        this.katex.render(
          `\\mathcal{P = \\large\\frac{LDC}{E}} \\newline
           \\mathcal{P = \\large\\frac{${this._ldc}}{${this.toFixed(
            this._esfuerzo,
            6
          )}}}\\newline
           \\mathcal{P = ${this.toFixed(this._produccion, 6)}}\\newline
           \\mathcal{P \\approx ${Math.floor(this._produccion)}}
           \\enspace \\large\\frac{ins \\cdot programador}{mes}`,
          process,
          option
        );
        break;
      case "c-c":
        this.katex.render(
          `\\mathcal{C = E \\cdot CH} \\newline
           \\mathcal{C = ${this.toFixed(this._esfuerzo, 6)} \\cdot ${
            this.honorario
          }} \\newline
           \\mathcal{C = ${this.toFixed(this._costo, 6)}}\\newline
           \\mathcal{C \\approx ${Math.ceil(this._costo)}} \\enspace Bs.`,
          process,
          option
        );
        break;
    }
  }
}
