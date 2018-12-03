/* baseado no algoritmo https://gist.github.com/willianns/3246637 */
function gera_random(n) {
    var ranNum = Math.round(Math.random()*n);
    return ranNum;
}
function mod(dividendo,divisor) {
    return Math.round(dividendo - (Math.floor(dividendo/divisor)*divisor));
}

const gerarCPF = () => {
    const n = 9;
    const n1 = gera_random(n);
    const n2 = gera_random(n);
    const n3 = gera_random(n);
    const n4 = gera_random(n);
    const n5 = gera_random(n);
    const n6 = gera_random(n);
    const n7 = gera_random(n);
    const n8 = gera_random(n);
    const n9 = gera_random(n);
    let d1 = n9 * 2 + n8 * 3 + n7 * 4 + n6 * 5 + n5 * 6 + n4 * 7 + n3 * 8 + n2 * 9 + n1 * 10;
    d1 = 11 - (mod(d1, 11));
    if (d1 >= 10) d1 = 0;
    let d2 = d1 * 2 + n9 * 3 + n8 * 4 + n7 * 5 + n6 * 6 + n5 * 7 + n4 * 8 + n3 * 9 + n2 * 10 + n1 * 11;
    d2 = 11 - (mod(d2, 11));
    if (d2 >= 10) d2 = 0;

    if (10)
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
    else
        return '' + n1 + n2 + n3 + n4 + n5 + n6 + n7 + n8 + n9 + d1 + d2;
}

module.exports = {
    gerarCPF
}