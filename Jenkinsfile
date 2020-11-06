node {
  stage('Checkout') {
    git branch: 'main', url: 'https://github.com/leoduprates/sample-selenium-cucumber-js'
  }
  stage('Build') {
    nodejs(nodeJSInstallationName: 'nodejs') {
      sh 'npm install'
    }
  }
  stage('Test') {
    nodejs(nodeJSInstallationName: 'nodejs') {
      sh 'BROWSER=chrome SERVER=http://selenium-hub:4444/wd/hub npm test -- -t @regression'
    }
  }
  stage('Report') {
    nodejs(nodeJSInstallationName: 'nodejs') {
      sh 'npm run report'
    }
    publishHTML (target : [
      allowMissing: false,
      alwaysLinkToLastBuild: true,
      keepAll: true,
      reportDir: 'reports',
      reportFiles: 'report.html',
      reportName: 'Automation Test Report',
      reportTitles: 'Automation Test Report'])
  }
}