const { add } = require('../src/stringCalculator');

describe('String Calculator', () => {
    test('should return 0 for an empty string', () => {
        expect(add('')).toBe(0)
    })

    test('should return the number only if one number is provided', () => {
        expect(add('5')).toBe(5)
    })

    test('should return sum of comma-separated numbers', () => { 
        expect(add('2,3,1')).toBe(6)
     })

     test('should handle newlines as separators like commas', () => { 
        expect(add('2\n3,1')).toBe(6)
      })

      test('should support custom delimiter', () => { 
        expect(add('//;\n1;3;2')).toBe(6)
       })
})