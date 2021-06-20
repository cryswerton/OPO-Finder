function print(msg){
    console.log(msg)
}

function wordExists(word, str, strPos){
    if(strPos > -1 && str.charAt(strPos + word.length) === ' '){
        print(`The word starts at ${strPos} and ends at ${strPos + word.length}`)
        return true
    }else{
        return false
    }
}

function singleText(text, word){
    const str = text.toLowerCase()
    const strPos = str.indexOf(word)
    let response = ''
    if(wordExists(word, str, strPos)){
        response = `(${word}) => ${str.replace(word, '==>>> '+word+' <<<==')}`
    }
    return response
}

function getText(paragraphs, word){
    let str = ''
    paragraphs.forEach( p => {
        str += singleText(p.textContent, word) + '\n'
    })
    return str
}



let stateCheck = setInterval(() => {
    if (document.readyState === 'complete') {
      clearInterval(stateCheck);
      
      print('script running.')
      print('document ready.')

      const paragraphs = document.querySelectorAll('p')

      print(getText(paragraphs, 'free'))

    }
  }, 100);










