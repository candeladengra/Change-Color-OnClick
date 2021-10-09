function ChangeColor (elementoID) {
    const divs = document.getElementsByTagName('div')
    
    const elemento = document.getElementById(elementoID)

    const color = window.getComputedStyle(elemento, null).getPropertyValue("background-color");

    for (div of divs) {
        
        div.style.backgroundColor = color

    }
}

