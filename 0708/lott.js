//排序前
let sortBefore = document.getElementById("sortBefore");
//排序後
let sortAfter = document.getElementById("sortAfter");
//第二區號碼
let secNo = document.getElementById("secNo");

//威力彩
function lott1() {
    //第一區號碼：1-36取6
    //建立存放號碼的空陣列
    let lott = [];
    //while
    let count = 1;
    // while (lott.length < 6) {
    //     // 亂數取號碼
    //     let lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複
    //     if (lott.includes(lottNo) == false) {  // 沒找到重複
    //         lott.push(lottNo);             // 增加號碼到陣列中
    //         count++;
    //     }
    // }


    while (1) {
        if (lott.length == 6) {
            break
        }
        let lottNo = Math.floor(Math.random() * 38) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  // 沒找到重複
            lott.push(lottNo);             // 增加號碼到陣列中
        }
    }

    //for
    // // 第一個號碼
    // let lottNo = Math.floor(Math.random() * 38) + 1;
    // lott.push(lottNo);
    // // 第二個號碼之後，每個號碼都要檢查是否重複
    // // 還要跑5個號碼
    // for (let i = 1; i <= 5; i++) {
    //     // 亂數取號碼
    //     lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複

    //     if (lott.includes(lottNo) == false) {  // 沒找到重複
    //         lott.push(lottNo);             // 增加號碼到陣列中
    //     }else{
    //         i--;     //當號碼重複時，這次的執行次數不算
    //     }
    // }
    // 未排序
    sortBefore.textContent = "排序前：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後：" + lott;

    // 第二區號碼：1-8取1
    secNo.textContent = "第二區號碼：" + (Math.floor(Math.random() * 8 + 1));
}

//大樂透
function lott2() {
    //第一區號碼：1-49取6
    //建立存放號碼的空陣列
    let lott = [];
    //while
    let count = 1;
    // while (lott.length < 6) {
    //     // 亂數取號碼
    //     let lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複
    //     if (lott.includes(lottNo) == false) {  // 沒找到重複
    //         lott.push(lottNo);             // 增加號碼到陣列中
    //         count++;
    //     }
    // }


    while (1) {
        if (lott.length == 6) {
            break
        }
        let lottNo = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  // 沒找到重複
            lott.push(lottNo);             // 增加號碼到陣列中
        }
    }

    //上面一次跑7個號碼的時候要用pop先取出來
    //pop()=>取出並移除最後一個值
    // secNo.textContent = "特別號：" + lott.pop();

    // 未排序
    sortBefore.textContent = "排序前：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後：" + lott;

    // 第二區號碼：1-49取1(不能跟第一區重複)
    while (1) {
        let lottNo2 = Math.floor(Math.random() * 49) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo2) == false) {     //沒有重複
            secNo.textContent = "特別號：" + lottNo2;
            break;
        }
    }
}

//今彩539
function lott3() {
    //號碼：1-39取5
    //建立存放號碼的空陣列
    let lott = [];
    //while
    let count = 1;
    // while (lott.length < 6) {
    //     // 亂數取號碼
    //     let lottNo = Math.floor(Math.random() * 38) + 1;
    //     // 檢查是否重複
    //     if (lott.includes(lottNo) == false) {  // 沒找到重複
    //         lott.push(lottNo);             // 增加號碼到陣列中
    //         count++;
    //     }
    // }


    while (1) {
        if (lott.length == 5) {
            break
        }
        let lottNo = Math.floor(Math.random() * 39) + 1;
        // 檢查是否重複
        if (lott.includes(lottNo) == false) {  // 沒找到重複
            lott.push(lottNo);             // 增加號碼到陣列中
        }
    }

    //上面一次跑7個號碼的時候要用pop先取出來
    //pop()=>取出並移除最後一個值
    // secNo.textContent = "特別號：" + lott.pop();

    // 未排序
    sortBefore.textContent = "排序前：" + lott;
    // 排序
    lott.sort((a, b) => {
        return a - b;
    })
    sortAfter.textContent = "排序後：" + lott;

    //今彩沒有第二區，所以要清除
    secNo.textContent = "";


}