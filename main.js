// Получаем все элементы с классом "key"
const keys = document.querySelectorAll(".key");

// Добавляем обработчик события "click" для каждого элемента
// keys.forEach(function(key) {
//   key.addEventListener("click", function() {
//     // Получаем значение атрибута "data-key" для текущего элемента
//     const dataKey = this.getAttribute("data-key");

//     // Находим аудиоэлемент с соответствующим значением атрибута "data-key"
//     const audio = document.querySelector(`audio[data-key="${dataKey}"]`);

//     if (audio) {
//       // Воспроизводим аудио
//       audio.currentTime = 0;
//       audio.play();
//       this.addEventListener("transitionend",
//       function(){
//         this.classList.remove("active");
//       });
//     }
//   });
// });
document.addEventListener('keydown', playSound)

function playSound(event) {

    const audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`)

    if (audio) {
        // Воспроизводим аудио
        audio.currentTime = 0;
        audio.play();
    }
    if (key) {
        key.classList.add('playing');
    }
    //   this.addEventListener("transitionend",
    //   function(event) {
    //     event.target.classList.remove("playing");
    //   });


    this.addEventListener("transitionend", (event) => {
        event.target.classList.remove("playing");
    });


}


