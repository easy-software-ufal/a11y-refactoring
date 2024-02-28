// @ts-nocheck
/**
 * Replaces the first <div> containing a direct child <h1> with a <header> element.
 * 
 * @param {HTMLDocument} document - The DOM document object.
 */
function replaceDivsWithHeader(document) {
    const mainHeaderDiv = document.querySelector('div > h1');
    if (mainHeaderDiv && mainHeaderDiv.parentNode && mainHeaderDiv.parentNode.tagName.toLowerCase() === 'div') {
        const header = document.createElement('header');
        Array.from(mainHeaderDiv.parentNode.attributes).forEach(attr => {
            header.setAttribute(attr.name, attr.value);
        });
        header.innerHTML = mainHeaderDiv.parentNode.innerHTML;
        mainHeaderDiv.parentNode.parentNode.replaceChild(header, mainHeaderDiv.parentNode);
    }
}

/**
 * Replaces <div> elements containing direct child lists (<ul> or <ol>) with <nav> elements, 
 * if those lists contain anchor (<a>) elements.
 * 
 * @param {HTMLDocument} document - The DOM document object.
 */
function replaceDivsWithNav(document) {
    const navDivs = document.querySelectorAll('div > ul, div > ol');
    navDivs.forEach(div => {
        if (div.querySelector('a') && div.parentNode && div.parentNode.tagName.toLowerCase() === 'div') {
            const nav = document.createElement('nav');
            Array.from(div.parentNode.attributes).forEach(attr => {
                nav.setAttribute(attr.name, attr.value);
            });
            nav.innerHTML = div.parentNode.innerHTML;
            div.parentNode.parentNode.replaceChild(nav, div.parentNode);
        }
    });
}

/**
 * Replaces the first <div> element that is a direct child of <body> (excluding <header> and <nav> elements)
 * with a <main> element.
 * 
 * @param {HTMLDocument} document - The DOM document object.
 */
function replaceDivsWithMain(document) {
    const divs = document.querySelectorAll('body > div:not(header):not(nav)');
    if (divs.length > 0 && divs[0].parentNode) {
        const main = document.createElement('main');
        Array.from(divs[0].attributes).forEach(attr => {
            main.setAttribute(attr.name, attr.value);
        });
        main.innerHTML = divs[0].innerHTML;
        divs[0].parentNode.replaceChild(main, divs[0]);
    }
}

module.exports = {
    replaceDivsWithHeader,
    replaceDivsWithNav,
    replaceDivsWithMain
}
