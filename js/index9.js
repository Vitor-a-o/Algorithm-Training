function domainName(url){
    return url.split(/http|:|www|\/\/|\.|https/).filter((i) => i !== '')[0];
}

console.log(domainName("http://www.zombie-bites.com"))