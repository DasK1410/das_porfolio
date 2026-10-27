
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    environment {
        VERCEL_PROJECT = 'das-porfolio'
        VERCEL_SCOPE = 'arul-dhas-projects'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Install Dependencies') {
            steps {
                sh 'node --version'
                sh 'npm --version'
                sh 'npm ci'
            }
        }

        stage('Code Quality Check') {
            steps {
                sh 'npm run lint'
            }
        }

        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }

        stage('Link Vercel Project') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'vercel-token',
                        variable: 'VERCEL_TOKEN'
                    )
                ]) {
                    sh '''
                        npx vercel link \
                            --yes \
                            --project="$VERCEL_PROJECT" \
                            --scope="$VERCEL_SCOPE" \
                            --token="$VERCEL_TOKEN"
                    '''
                }
            }
        }

        stage('Deploy to Vercel') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'vercel-token',
                        variable: 'VERCEL_TOKEN'
                    )
                ]) {
                    sh '''
                        npx vercel deploy \
                            --prod \
                            --yes \
                            --scope="$VERCEL_SCOPE" \
                            --token="$VERCEL_TOKEN"
                    '''
                }
            }
        }
    }

    post {
        success {
            echo 'Pipeline completed successfully! Portfolio deployed to Vercel.'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output for details.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}

