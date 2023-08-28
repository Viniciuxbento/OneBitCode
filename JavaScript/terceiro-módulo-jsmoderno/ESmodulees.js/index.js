import { inline } from "./inline.js"// inport inline normal, que pode chamar varias funções
import defaultInline from "./inline.js"// inport default que pode ser chamada apenas uma função que vai ser padrão!
import exportDefault, { group, a, b, c, d } from "./non-inline.js" 
// inport não inline, que mostra como exportar depois das declarações de função para encurtar o código 

inline()
defaultInline()

group()
exportDefault()