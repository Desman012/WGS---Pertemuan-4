const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('What is your name?', (name) => {
    rl.question('What is your email?', (email) => {
        rl.question('What is your number phone?', (tlp) => {
            console.log(`Your name : ${name}`);
            console.log(`Your email : ${email}`);
            console.log(`Your phone : ${tlp}`);
            console.log('Thank you')
            rl.close();
        })
    })
})
