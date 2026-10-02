/*!
  * ポートフォリオサイト認証用
  */
/*TOPでのログイン認証*/
function login() {
    const password = document.getElementById("password").value;

    if (password === "Odoruyatsu@20th") {
        sessionStorage.setItem("authenticated", "true");
        location.href = "top.html";
    } else {
        alert("認証失敗、もう一度お試しください。");
    }
}

/*認証していなければTOPに戻されるやつ*/
function checkAuth() {
    if (sessionStorage.getItem("authenticated") !== "true") {
        location.href = "./";
    }
}