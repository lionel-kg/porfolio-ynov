pipeline {
    environment {
        ID_DOCKER = "${ID_DOCKER_PARAMS}"
        IMAGE_NAME = "jk-flask-auth-app"
        IMAGE_TAG = "latest"
        PORT_EXPOSED = "${PORT_PARAMS}" 
        STAGING = "${ID_DOCKER}-flask-staging"
        PRODUCTION = "${ID_DOCKER}-production"
        // Add the npm directory to the PATH
        PATH = "/root/.nvm/versions/node/v20.12.2/bin:$PATH"
    }
    agent none
    stages {
        stage('deploy it') {
            agent any
            steps {
                script {
                    sh '''
                        cd /var/www/porfolio-ynov
                        pwd
                        echo $PATH
                        git pull
                        npm install
                        npm run prod
                    '''
                }
            }
        }
    }
    // Uncomment the post section if you want to enable email notifications
    /*
    post {
        always {
            emailext (
                attachLog: true,
                from: 'lionelkomguemalma@gmail.com',
                to: 'lionel77350@gmail.com',
                subject: "Rapport de build - ${currentBuild.fullDisplayName}",
                body: "Bonjour,\n\nLe build ${currentBuild.fullDisplayName} s'est terminé avec le statut ${currentBuild.currentResult}.\n\nCordialement,\nJenkins",
            )
        }
    }
    */
}
