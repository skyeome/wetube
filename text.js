/* middleware 중간에 사용가능한 function
const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}
app.use(betweenHome);
*/
/* morgan("") combined-브라우저,운영체제 tiny- */

/* 
const middleware = (req,res,next) => {
    res.send("not happening");
    //middleware는 중간에 끼어들기 때문에 연결을 끊게 만들수도 있음
}
*/