function decodeMsg() {
     var res = {};
    fs.readFile(
        '/Users/minhhuynh/Developer/vcsc/vcsc-fullstack-test-202202/packages/backend/data.tcp',
        'utf8',
        (error, data) => {
        if (error) {
            console.log('error', error);
        }
        const formatData = data.split("");
        for (const temp of formatData) {
            const a = temp.split("=");
            res[a[0]] = a[1];
        }
    })
    return res;
    
}

module.exports = decodeMsg