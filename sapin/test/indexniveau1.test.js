const {describe, it} = require('mocha');
const expect = require('chai').expect;

const sapin = require('../src/sapin');

const expectedResult0 = ` +
/*\\`;

const expectedResult1 = `  +
 /*\\
/***\\`;

const expectedResult2 = `   +
  /*\\
 /***\\
/*****\\`;

const expectedResult5 = `      +
     /*\\
    /***\\
   /*****\\
  /*******\\
 /*********\\
/***********\\`;

describe('test sapin function', () => {
  it('should on 0 return a plus', () => {
    const result = sapin(0);
    expect(result).to.be.equal(expectedResult0);
  });

  it('should on 1 return a top of sapin', () => {
    const result = sapin(1);
    expect(result).to.be.equal(expectedResult1);
  });

  it('should on 2 return small sapin', () => {
    const result = sapin(2);
    expect(result).to.be.equal(expectedResult2);
  });

  it('should on 5 return  sapin', () => {
    const result = sapin(5);
    expect(result).to.be.equal(expectedResult5);
  });
})

