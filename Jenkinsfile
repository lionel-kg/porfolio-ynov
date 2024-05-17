pipeline {
    agent none
    tools {
        nodejs 'npm'
    }
     stages {    
          stage('Install Node.js') {
        agent any
            steps {
                sh 'curl -sL https://deb.nodesource.com/setup_16.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'
            }
        }

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