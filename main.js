function choco (n1, n2, type) {

    try {
        return eval(n1 + type + n2);
    }
    catch (err) {
        return 'error'
    }

    
}
