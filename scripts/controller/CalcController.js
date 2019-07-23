class CalcController{

    constructor(){

        this._displayCalc = '0';
        this._currentDate;
        this.initialize();
    }

    initialize(){

        let displayCalEl = document.querySelector("#display");
        let dateEl = document.querySelector("#data");
        let timeEl = document.querySelector("#hora");

        displayCalEl.innerHTML = "45676";
        dateEl.innerHTML =
        timeEl.innerHTML = 
    }

    get displayCalc(){
        return this._displayCalc;
    }

    set displayCalc(valor){
        this.displayCalc = valor
    }

    get dataAtual(){
        return this._currentDate;
    }

    set dataAtual(valor){
        this._currentDate = valor;
    }

    

}