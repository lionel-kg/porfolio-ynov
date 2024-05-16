pipeline {
    
     environment {
       ID_DOCKER = "${ID_DOCKER_PARAMS}"
       IMAGE_NAME = "jk-flask-auth-app"
       IMAGE_TAG = "latest"
       PORT_EXPOSED = "${PORT_PARAMS}" 
       STAGING = "${ID_DOCKER}-flask-staging"
       PRODUCTION = "${ID_DOCKER}-production"
     }
     agent none
     stages {
          stage('Install Node.js') {
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