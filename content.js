function print(msg){
    console.log(msg)
}

print('Content.js is running.')

function wordExists(word, str, strPos){
    if(strPos > -1 && str.charAt(strPos + 4)){
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
        response = `(${word}) => ${str}`
    }
    return response
}

function getText(paragraphs){
    let str = ''
    paragraphs.forEach( p => {
        str += singleText(p.textContent, 'javascript') + '\n'
    })
    return str
}



const paragraphs = document.querySelectorAll('p')

print(getText(paragraphs))




