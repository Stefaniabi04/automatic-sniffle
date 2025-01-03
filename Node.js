const readline = require('readline');
const { exec } = require('child_process');

// Create an interface to read user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function displayMenu() {
    console.log('\nPortfolio Setup Script');
    console.log('==============================');
    console.log('[1] Build Portfolio');
    console.log('[2] Test Portfolio');
    console.log('[3] Clean Build');
    console.log('[4] Exit');

    rl.question('Please choose an option: ', (choice) => {
        switch (choice) {
            case '1':
                buildPortfolio();
                break;
            case '2':
                testPortfolio();
                break;
            case '3':
                cleanBuild();
                break;
            case '4':
                exit();
                break;
            default:
                console.log('Invalid choice. Please try again.');
                displayMenu();
        }
    });
}

function buildPortfolio() {
    console.log('Building your portfolio...');
    exec('npm run build', (error, stdout, stderr) => {
        if (error) {
            console.error(`Build error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log('Build complete!');
        displayMenu();
    });
}

function testPortfolio() {
    console.log('Running tests for your portfolio...');
    exec('npm test', (error, stdout, stderr) => {
        if (error) {
            console.error(`Test error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log(`stdout: ${stdout}`);
        console.log('All tests passed!');
        displayMenu();
    });
}

function cleanBuild() {
    console.log('Cleaning up build files...');
    exec('rm -rf dist', (error, stdout, stderr) => {
        if (error) {
            console.error(`Clean up error: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`stderr: ${stderr}`);
            return;
        }
        console.log('Cleanup complete!');
        displayMenu();
    });
}

function exit() {
    console.log('Exiting script. Goodbye!');
    rl.close();
}

// Start the menu
displayMenu();
{
    "scripts": {
        "build": "webpack --config webpack.config.js",
            "test": "mocha"
    }
}
