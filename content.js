function print(msg){
    console.log(msg)
}

const wordArray = ['that', 'of']

function getWordPos(str, word){
    const strPos = str.indexOf(word)
    return strPos
}

function wordsExist(wordArray){
    const ps = document.querySelectorAll('p')

    print(`Words to be checked: `)

    wordArray.forEach(wd => {
        print(wd)
    })

    print(ps[2].textContent)

    wordArray.forEach( word => {
        if(wordExists(word, ps[2].textContent, getWordPos(ps[2].textContent, word))){
            print(`The word ${word} exists.`)
        }
    })
}

function wordExists(word, str, strPos){
    if(strPos > -1 && str.charAt(strPos + word.length) === ' '){
        //print(`The word starts at ${strPos} and ends at ${strPos + word.length}`)
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
        response = `(${word}) => ${str.replaceAll(word, '==>>> '+word+' <<<==')}`
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

      //print(getText(paragraphs, 'javascript'))

      wordsExist(wordArray)

    }
  }, 100);










