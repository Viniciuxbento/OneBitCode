function group() {
    console.log('Export nomeado não-inline (agrupado)')
  }
  
  function a () {console.log('a')}
  function b () {console.log('b')}
  function c () {console.log('c')}
  function d () {console.log('d')}
  
  function exportDefault() {
    console.log('Export default não-inline')
  }
  
  export { group, a, b, c, d } // consegue declarar todas as funções dentro de uma chave 
  
  export default exportDefault// e o default como sempre só pode ser uma 