'use strict';

const mean = require('stats-mean');

module.exports = function (X, Y) {
    if (X.length !== Y.length) {
        throw Error('X.length must match Y.length');
    }

    const length = X.length;
    const meanX = mean.calc(X);
    const meanY = mean.calc(Y);

    let covariance = 0;

    for (let i = 0; i < length; i++) {
        covariance += (X[i] - meanX) * (Y[i] - meanY);
    }

    return covariance / length;
};
