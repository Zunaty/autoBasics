module.exports = {
    url: 'https://devmountain-qa.github.io/Automation-Basics/build/',
    elements: {
        //These are the selectors for all headings.
        headEO: '.evenAndOddPB',
        headFO: '.filterObjectsPB',
        headFS: '.filterStringsPB',
        headP: '.palindromePB',
        headS: '.sumPB',
        
        //These selectors are for all buttons
        buttonEO: 'button[name="evenOddButton"]',
        buttonFO: 'button[name="objectFilterButton"]',
        buttonFS: 'button[id="nameFilterButton"]',
        buttonP: 'button[name="palindromeButton"]',
        buttonS: 'button[name="sumButton"]',

        //Result selectors
        resultEven: 'span[name="evenResults"]',
        resultOdd: 'span[name="oddResults"]',
        resultFO: 'span[name="objectFilterResults"]',
        resultFS: 'span[name="nameFilterResults"]',
        resultP: 'span[name="palindromeResults"]',
        resultS: 'span[name="sumResults"]',

        //Text field selectors
        textEO: 'input[name="evenOddInput"]',
        textFO: 'input[name="objectFilterInput"]',
        textFS: 'input[id="nameFilterInput"]',
        textP: 'input[name="palindromeInput"]',
        textS1: 'input[name="sumInput1"]',
        textS2: 'input[name="sumInput2"]',
    }
}