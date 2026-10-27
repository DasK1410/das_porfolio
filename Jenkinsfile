
pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                checkout scm
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

        stage('Deploy to Vercel') {
            steps {
                withCredentials([
                    string(
                        credentialsId: 'vercel-token',
                        variable: 'VERCEL_TOKEN'
                    )
                ]) {
                    sh '''
                        npx vercel pull --yes --environment=production --token="$VERCEL_TOKEN"
                        npx vercel build --prod --token="$VERCEL_TOKEN"
                        npx vercel deploy --prebuilt --prod --token="$VERCEL_TOKEN"
                    '''
                }
            }
        }
    }
}
