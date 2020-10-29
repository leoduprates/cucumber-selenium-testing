job('selenium-cucumber-js') {
    scm {
        git('https://github.com/leoduprates/sample-selenium-cucumber-js') 
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs') // this is the name of the NodeJS installation in 
                         // Manage Jenkins -> Configure Tools -> NodeJS Installations -> Name
    }
    steps {
        shell("npm install")
    }
}
