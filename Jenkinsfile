pipeline {
    agent any

    stages {

        stage('Build Docker Image') {
            steps {
                bat 'docker build -t food-ordering-app .'
            }
        }

        stage('Deploy Container') {
            steps {
                bat 'docker stop food-ordering-container'
                bat 'docker rm food-ordering-container'
                bat 'docker run -d --name food-ordering-container -p 8080:80 food-ordering-app'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }
    }
}