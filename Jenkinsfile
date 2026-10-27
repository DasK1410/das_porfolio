
pipeline {
    agent any

    tools {
        nodejs 'NodeJS-22'
    }

    environment {
        GIT_BRANCH = 'main'
        VERCEL_PROJECT = 'das-porfolio'
        VERCEL_SCOPE = 'arul-dhas-projects'
    }

    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }

        stage('Git Pull') {
            steps {
                sh '''
                    git fetch origin "$GIT_BRANCH"
                    git pull --ff-only origin "$GIT_BRANCH"
                    git log -1 --oneline
                '''
            }
        }

        stage('Check Node.js and npm') {
            steps {
                sh 'node --version'
                sh 'npm --version'
            }
        }

        stage('Install Dependencies') {
            steps {
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
                        npx --yes vercel link \
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
                        npx --yes vercel deploy \
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
            echo 'CI/CD pipeline completed successfully!'
            echo 'Portfolio deployed to Vercel production.'
        }

        failure {
            echo 'Pipeline failed. Check the Console Output.'
        }

        always {
            echo 'Jenkins pipeline execution finished.'
        }
    }
}
