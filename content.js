function print(msg){
    console.log(msg) 
}

const wordArray = ['free']

function getWordPos(str, word){
    const strPos = str.indexOf(word)
    return strPos
}

function getParagraphs(elementContent){
    paragraphsArray = []
    string = Array.from(elementContent)
    let phrase = ''
    let temp = ''

    string.forEach( char => {
        if(char !== '.'){
            phrase += char
        }else{
            phrase += '.'
            temp = phrase
            phrase = ''
            paragraphsArray.push(temp)
        }
    })
    return paragraphsArray
}

function wordsExist(wordArray, element){
    let amountOfWords = wordArray.length
    let wordsCounted = 0
    valid = false
    wordArray.forEach( word => {
        if(wordExists(word, element.textContent, getWordPos(element.textContent, word))){
            wordsCounted += 1
        }
    })
    // print(`amount: ${amountOfWords}`)
    // print(`counted: ${wordsCounted}`)
    // print(amountOfWords === wordsCounted)
    if(amountOfWords === wordsCounted){
        valid = true
    }
    return valid
}

function getValidElements(wordArray){
    const ps = document.querySelectorAll('p')

    const elements = [...ps]

    print(elements[1].textContent)

    let validElements = elements.filter(p => {
        // wordsExist(wordArray, p.textContent)
        // print(wordsExist(wordArray, p.textContent))
        return wordsExist(wordArray, p)
    })
    return validElements
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

      print(getValidElements(wordArray))

    }
  }, 100);










