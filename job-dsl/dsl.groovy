job('selenium-cucumber-js') {
    scm {
        git('https://github.com/leoduprates/sample-selenium-cucumber-js') {  node ->
            node / gitConfigName('DSL User')
            node / gitConfigEmail('jenkinsdsl@training.xpto')
        }
    }
    triggers {
        scm('H/5 * * * *')
    }
    wrappers {
        nodejs('nodejs')
    }
    steps {
        shell("npm install")
    }
    publishers {
        archiveArtifacts {
            pattern('**')
            onlyIfSuccessful()
        }
    }
}