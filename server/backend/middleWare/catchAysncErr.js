// not in use i have used try catch insted

export const thefun = (req, res, next) =>{
    Promise.resolve(thefun(req, res, next)).catch(next);
}