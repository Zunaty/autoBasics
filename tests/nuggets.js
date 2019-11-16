var bbq = {}
module.exports = {
    beforeEach: browser => {
        bbq = browser.page.chicken()
        bbq.navigate()
    },
    after: browser => {
        bbq.end()
    },
    'Even and Odds Test': browser => {
        bbq
            .waitForElementVisible('@headEO')
            .setValue('@textEO', '1')
            .click('@buttonEO')
            .verify.containsText('@resultOdd', '1')

            .clearValue('@textEO')
            .setValue('@textEO', '2')
            .click('@buttonEO')
            .verify.containsText('@resultEven', '2')

            .clearValue('@textEO')
            .setValue('@textEO', 'abc')
            .click('@buttonEO')
            .verify.containsText('@resultOdd', 'null')

            .clearValue('@textEO')
            .setValue('@textEO', ' ')
            .click('@buttonEO')
            .verify.containsText('@resultEven', 'null')
    },
    'Filter Object Test': browser => {
        bbq
            .setValue('@textFO', 'age')
            .click('@buttonFO')
            .verify.containsText('@resultFO','age')

            .clearValue('@textFO')
            .setValue('@textFO', 'name')
            .click('@buttonFO')
            .verify.containsText('@resultFO','name')

            .clearValue('@textFO')
            .setValue('@textFO', 'hairColor')
            .click('@buttonFO')
            .verify.containsText('@resultFO','hairColor')

            .clearValue('@textFO')
            .setValue('@textFO', ' ')
            .click('@buttonFO')
            .verify.containsText('@resultFO',' ')

            .clearValue('@textFO')
            .setValue('@textFO', 'brown')
            .click('@buttonFO')
            .verify.containsText('@resultFO',' ')
    },
    'Filter String Test': browser => {
        bbq
            .setValue('@textFS', 'James')
            .click('@buttonFS')
            .verify.containsText('@resultFS','James')

            .clearValue('@textFS')
            .setValue('@textFS', 'Melody')
            .click('@buttonFS')
            .verify.containsText('@resultFS','Melody')

            .clearValue('@textFS')
            .setValue('@textFS', 'Mark')
            .click('@buttonFS')
            .verify.containsText('@resultFS','Mark')

            .clearValue('@textFS')
            .setValue('@textFS', ' ')
            .click('@buttonFS')
            .verify.containsText('@resultFS',' ')

            .clearValue('@textFS')
            .setValue('@textFS', '123')
            .click('@buttonFS')
            .verify.containsText('@resultFS',' ')
    }
}