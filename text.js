/* eslint-disable prettier/prettier */
/* middleware 중간에 사용가능한 function
const betweenHome = (req, res, next) => {
    console.log("Between");
    next();
}
app.use(betweenHome);
*/
/* morgan("") 로그를 남기는 middleware combined-브라우저,운영체제 tiny- */

/* 
const middleware = (req,res,next) => {
    res.send("not happening");
    //middleware는 중간에 끼어들기 때문에 연결을 끊게 만들수도 있음
}
helmet은 서버 보안을 위한 middleware
multer는 파일 업로드를 위한 middleware
*/

/* es6 코딩 방식

const {
    query:{ term:searchingBy }
} = req;
위 코드는 아래와 같이 사용할 수 있다.
const searchingBy = req.query.term;

또한 Object 전달시에도
res.render{"search", { pageTitle:"Search", searchingBy: searchingBy }}
일 경우 searchingBy 로 생략가능함.

*/