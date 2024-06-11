console.log("firebase file");

  // Your web app's Firebase configuration
  // 위에 있는 것은 Firebase 설정 객체 : 내 firebase에 대한 정보
  // 데이터가 내가 넣어줘야 하는게 맞는것인지 한번 더 확인 하기
  const firebaseConfig = {
    apiKey: "AIzaSyA_eABRIE1h7WDkak3Hj6lRj109OvqjpRg",
    authDomain: "fir-test-a1c99.firebaseapp.com",
    databaseURL: "https://fir-test-a1c99-default-rtdb.firebaseio.com",
    projectId: "fir-test-a1c99",
    storageBucket: "fir-test-a1c99.appspot.com",
    messagingSenderId: "640110399290",
    appId: "1:640110399290:web:e625726fedc22996584a03"
  };

  // Initialize Firebase
  // 위에 있는 것은 firebase 앱 초기화
  const app = firebase.initializeApp(firebaseConfig);

  // firebase의 실시간 데이터베이스
  const database = firebase.database()

  // 매개변수 부분 숙지하기!
  const writeUserData = (userId,name,email) => {
    firebase.database().ref("users/"+ userId).set({
        name : name,
        email : email
    })
  }

  // firebase에 있는 데이터 읽기
  const readUserData = (userId) => {
    const userRef = firebase.database().ref("users/")
                                // "users/ 라는 경로의 참조를 가져옴
    userRef.onse("value").then((res)=>{
        const data = res.val()
        console.log(data);
    })
  }


/* Mission!
    1. addUserBtn 이라는 id를 가진 버튼을 클릭 시 
    2. 사용자가 input에 입력하 세개의 데이터를 각각 consol창에 찍어보기
    3. 02. JS실전 폴더 -> ex04 참고
*/
// dom의 개념으로 사용한 것이여서 꼭 이해하기
let addUserBtn = document.getElementById("addUserBtn")
let frm = document.frm.elements

addUserBtn.addEventListener("click",()=>{
    console.log((frm[0].value));
    console.log((frm[1].value));
    console.log((frm[2].value));

    writeUserData(frm[0].value,frm[1].value,frm[2].value)
})

let getUserBtn = document.getElementById("getUserBtn")
getUserBtn.addEventListener("click",()=>{
    console.log("유저가져오기 ck");
    readUserData("country")
})