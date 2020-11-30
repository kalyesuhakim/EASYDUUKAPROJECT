function log() {
    return {
        clear: () => console.clear(),
        log: (...msg) => //console.log(...msg),
        alert : message => alert(message),
        message: message => //console.log(...message),
        warn: err => //console.log(...err),
        console: console,
    }
}

const DevLog = log();
export default DevLog