var Planetas;
(function (Planetas) {
    Planetas[Planetas["PLUTAO"] = 0] = "PLUTAO";
    Planetas[Planetas["MERCURIO"] = 1] = "MERCURIO";
    Planetas[Planetas["TERRA"] = 5] = "TERRA";
    Planetas[Planetas["MARTE"] = 6] = "MARTE";
})(Planetas || (Planetas = {}));
//MAS ESSE VALOR PODE SER ALTERADO 
Planetas.PLUTAO; /// pode ser referenciado depois
