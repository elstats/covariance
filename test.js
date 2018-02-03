import test from 'ava';
import cov from './';

test('should calculate covariance', t => {
    const X = [1, 3, 3, 4, 4, 6, 7, 5, 8, 9];
    const Y = [9, 6, 7, 5, 5, 4, 3, 2, 2, 2];

    t.is(cov(X, Y), -4.8);
});

test('should throw error if X.length !== Y.length', t => {
    const X = [1, 3, 3];
    const Y = [9, 6];

    t.throws(() => cov(X, Y));
});
