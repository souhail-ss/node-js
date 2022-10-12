//example 1

// var assert = require('assert');
// describe('Array', function () {
//   describe('#indexOf()', function () {
//     it('should return -1 when the value is not present', function () {
//       assert.equal([1, 2, 3, 4].indexOf(4), -1);
//     });
//   });
// });

// const expect = require("expect.js");
// const {
//   congratulateStudent,
//   getStubFile,
//   getStudentCode,
//   runStudentCode,
// } = require("./common/techio");

const EXPECTED_RESPONSE = require("./common/expected-response.js");

const CODE_FILE = process.env.CODE_FILE || getStubFile(__filename);

describe("le programme devrait", () => {
  it(`afficher "please provide a URL" dans la sortie d'erreurs si aucune URL n'est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE);
    expect(program.getErrors().join("").trim()).to.be("please provide a URL");
  });

  it(`afficher la réponse dans la sortie standard, si une URL valide est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE, {
      args: ["https://jsonplaceholder.typicode.com/photos/1"],
    });
    const response = program.getLogs().join("").trim();
    expect(JSON.parse(response)).to.eql(EXPECTED_RESPONSE);
  });

  it(`afficher l'erreur dans la sortie d'erreurs, si une URL inexistante est fournie`, async () => {
    const program = await runStudentCode(CODE_FILE, {
      args: ["https://serveur-inexistant.xyz"],
    });
    const error = program.getErrors().join("").trim();
    expect(error).to.match(/^FetchError: /);
    expect(error).to.match(/ENOTFOUND/);
  });

  it("utiliser await au lieu de then() et/ou catch() pour récupérer l'erreur de fetch()", async () => {
    const code = await getStudentCode(CODE_FILE);
    expect(code).to.match(/await fetch\(/);
    expect(code).to.not.match(/\.then\(/);
    expect(code).to.not.match(/\.catch\(/);
    congratulateStudent();
  });
});
