require('mocha');
const path = require('path');
const fs = require('fs');
const chai = require('chai');
const chaiFiles = require('chai-files');

const file = chaiFiles.file;
const expect = chai.expect;

const compiledDirRoot = 'tests/out';
const expectedDirRoot = 'tests/mocks';

chai.use(chaiFiles);

describe('Compile Default Markdown', () => {

  it('should compile index', () => {
    expectFileToEqualMock('api-readme.md', 'default');
  });

  it('should compile modules', () => {
    expectOutputFilesToEqualMocks( 'default');
  });

});

describe('Compile Bitbucket Flavoured Markdown', () => {

  it('should compile index', () => {
    expectFileToEqualMock('api-readme.md', 'bitbucket');
  });

  it('should compile everything', () => {
    expectOutputFilesToEqualMocks( 'bitbucket');
  });

});

function expectFileToEqualMock(fileName, testNum) {
  expect(file(`${compiledDirRoot}/${testNum}/${fileName}`)).to.equal(file(`${expectedDirRoot}/${testNum}/${fileName}`));
}

function expectOutputFilesToEqualMocks(testNum) {
  const files = fs.readdirSync(path.join(__dirname, `/mocks/${testNum}`));
  files.forEach((filename) => {
    if (/.*\.md$/.test(filename)) {
      expectFileToEqualMock(`${filename}`, testNum);
    }
  });
}
