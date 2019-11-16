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

            .clearValue('@textEO')
            .setValue('@textEO', '12345')
            .click('@buttonEO')
            .verify.containsText('@resultEven', '24','Numbers were not split')
            .verify.containsText('@resultOdd', '135','Numbers were not split')
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
    },
    'Palindrome Test': browser => {
        bbq
            .setValue('@textP', 'racecar')
            .click('@buttonP')
            .verify.containsText('@resultP','true')

            .clearValue('@textP')
            .setValue('@textP', '123321')
            .click('@buttonP')
            .verify.containsText('@resultP','true')

            .clearValue('@textP')
            .setValue('@textP', 'Mark')
            .click('@buttonP')
            .verify.containsText('@resultP','false')

            .clearValue('@textP')
            .setValue('@textP', 'asddsa')
            .click('@buttonP')
            .verify.containsText('@resultP','true')

            .clearValue('@textP')
            .setValue('@textP', '@#$')
            .click('@buttonP')
            .verify.containsText('@resultP','false')
    },
    'Sum Test': browser => {
        bbq
            .setValue('@textS1', '2')
            .setValue('@textS2', '2')
            .click('@buttonS')
            .verify.containsText('@resultS','4')

            .clearValue('@textS1')
            .clearValue('@textS2')
            .setValue('@textS1', '123')
            .setValue('@textS2', '123')
            .click('@buttonS')
            .verify.containsText('@resultS','246')

            .clearValue('@textS1')
            .clearValue('@textS2')
            .setValue('@textS1', '')
            .setValue('@textS2', '2')
            .click('@buttonS')
            .verify.containsText('@resultS', '2', 'This should be a 2.')

            .clearValue('@textS1')
            .clearValue('@textS2')
            .setValue('@textS1', '2')
            .setValue('@textS2', '')
            .click('@buttonS')
            .verify.containsText('@resultS', '2', 'This should be a 2.')

            .clearValue('@textS1')
            .clearValue('@textS2')
            .setValue('@textS1', '')
            .setValue('@textS2', '')
            .click('@buttonS')
            .verify.containsText('@resultS', '', 'Nothing shoud appear.')

            .clearValue('@textS1')
            .clearValue('@textS2')
            .setValue('@textS1', 'e')
            .setValue('@textS2', 'e')
            .click('@buttonS')
            .verify.containsText('@resultS', '', 'Letters should not be accepted.')
    }
}