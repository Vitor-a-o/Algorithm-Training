var areYouPlayingBanjo = (n) => /^r/i.test(n)? n + " plays banjo" : n + " does not play banjo";

console.log(areYouPlayingBanjo("rabriel"))