Command                     Description
npm test                    Run All tests
npm run test: smoke         Run tests tagged with @smoke
npm run test:sanity         Run tests tagged with @sanity
npm run test:regression     Run tests tagged with @regression
npm run test:headed         Run test in headed browser mode


##Reports
npm run allure:generate
npm run allure:open


##Project structure

Pages  - Page oBject Classes
tests - spec files
testData -  JSON files, Excel Data
utils  - Data provider
fixtures -  Custom Playwright fixtures