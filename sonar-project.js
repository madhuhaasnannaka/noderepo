const sonarqubeScanner = require('sonarqube-scanner');
     sonarqubeScanner({
       serverUrl: 'https://sonarcloud.io',
       options : {
       'sonar.login':'418dafbb1bebe15e5d4c053e8bceb8cdfaaeb346'
       'sonar.organization=madhuhaasnannaka'
       'Dsonar.projectKey=madhuhaasnannaka_cloudreponodejs'
       'sonar.projectVersion':'1.0'
       'sonar.language':'js'
       'sonar.sourceEncoding':'UTF-8'
       'sonar.sources':'src'
       'sonar.exclusions':'**/node_modules/**'
       'sonar.tests':'src'
       'sonar.test.inclusions':'**/*.spec.ts'
       'sonar.typescript.lcov.reportPaths':'coverage/lcov.info'
       
       }
     }, () => {});