function humanReadable(seconds) {
    return parseInt(seconds/3600).toString().padStart(2, '0') +':'+ parseInt((seconds%3600)/60).toString().padStart(2, '0') +':'+ parseInt((seconds%3600)%60).toString().padStart(2, '0')
}

console.log(humanReadable(86399))