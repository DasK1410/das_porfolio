```groovy
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
                        node -e '
                            const t = process.env.VERCEL_TOKEN || "";
                            console.log("Token length:", t.length);
                            console.log("Contains whitespace:", /\\s/.test(t));
                            console.log("Has surrounding whitespace:", t !== t.trim());
                        '

                        npx vercel deploy --prod --yes --token="$VERCEL_TOKEN"
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
```
