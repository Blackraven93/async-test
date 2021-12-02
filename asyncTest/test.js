'use strict'

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    alert('You clicked me!');

    let pElem = document.createElement('p');
    pElem.textContent = 'This is a newly-added paragraph'
    document.body.appendChild(pElem);
})

// innerText <- 공백 삭제, textContent : 호환성 높음, 공백 유지

const loadAsset = (url, type, callback) => {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.responseType = type;

    // 이 밑에가 무슨의미일까?
    xhr.onload = () => {
        callback(xhr.response);
    }

    xhr.send()
}

const displayImage = (blob) => {
    let objectURL = URL.createObjectURL(blob);
    console.log(objectURL)
    let image = document.createElement('img');
    image.src = objectURL;
    document.body.appendChild(image);
    URL.revokeObjectURL(objectURL)
}

const jsImageURL = 'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FpDx7m%2FbtqCzAQ5dq6%2FzDXEkevv47XhjSeTsn0IEK%2Fimg.png'

// blob 이미지, 사운드, 비디오와 같은 멀티미디어 데이터 다룰 때 사용
// 데이터의 크기(Byte) 및 MIME 타입을 알아내거나, 데이터를 송수신을 위한 작은 Blob 객체로 나누는 등의 작업에 사용


loadAsset(jsImageURL, 'blob', displayImage);

const gods = ['Apollo', 'Zeus', 'Artemis', 'Ares'];

gods.forEach((eachName, index) => console.log(`${index} : ${eachName}`))


const sayHi = () => {
    alert('Hello Mr. Universe!')
}

let myGreeting = setTimeout(sayHi, 2000);