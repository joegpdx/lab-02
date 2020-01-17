// IMPORT MODULES under test here:
// import example from '../src/example.js';
import compare from '../compare.js';

const test = QUnit.test;

test('testing 0', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 7;
    const expected = 0;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(guess, 7);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('testing -1', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 7;
    const expected = -1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(guess, 19);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});
test('testing 1', function (assert) {
    //Arrange
    // Set up your parameters and expectations
    const guess = 7;
    const expected = 1;
    //Act 
    // Call the function you're testing and set the result to a const
    const result = compare(guess, 6);
    //Assert
    // Make assertions about what is expected valid result
    assert.equal(expected, result);
});