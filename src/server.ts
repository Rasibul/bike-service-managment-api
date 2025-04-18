import app from './app';


const port = 3000


async function main() {
    const server = app.listen(port, () => {
        console.log(`Server is running at ${port}`);
    });

}



main();