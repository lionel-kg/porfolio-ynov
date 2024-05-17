pipeline {
    agent none
    tools {
        nodejs 'npm'
    }
     stages {    
    stage('deploy it') {
    agent any
    steps {
        script {
            sh '''
                cd /var/www/porfolio-ynov
                pwd
                git pull
                npm install
                npm run prod
            '''
        }
    }
}
  }
    //  post {
    //     always {
    //         emailext (
    //             attachLog: true,
    //             from: 'lionelkomguemalma@gmail.com',
    //             to: 'lionel77350@gmail.com',
    //             subject: "Rapport de build - ${currentBuild.fullDisplayName}",
    //             body: "Bonjour,\n\nLe build ${currentBuild.fullDisplayName} s'est terminé avec le statut ${currentBuild.currentResult}.\n\nCordialement,\nJenkins",
    //         )
    //     }
    // }
}