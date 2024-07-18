
  function openSlideMenu() {
    document.getElementById("menu").style.width = "35%";
  }

  function closeSlideMenu() {
    document.getElementById("menu").style.width = "0%";
  }

  window.onload = function () {
    let naruto = {
      name: 'Naruto',
      tally: 0
    }
    let sasuke = {
      name: 'Sasuke',
      tally: 0
    }
    let sakura = {
      name: 'Sakura',
      tally: 0
    }
    let choji = {
      name: 'Choji',
      tally: 0
    } 
    let neji = {
      name: 'Neji',
      tally: 0
    }
    let hinata = {
      name: 'Hinata',
      tally: 0
    }
    let shikamaru = {
      name: 'Shikamaru',
      tally: 0
    }



    let finalTally = []



    let choices1 = document.querySelectorAll('.choices1 button')
    let choices2 = document.querySelectorAll('.choices2 button')
    let choices3 = document.querySelectorAll('.choices3 button')
    let choices4 = document.querySelectorAll('.choices4 button')
    let choices5 = document.querySelectorAll('.choices5 button')

    function disabledBttn(choices) {
      for (let i = 0; i < choices.length; i++) {
        choices[i].disabled = true
      }
    }

    function chooseAns() {
      for (let i = 0; i < choices1.length; i++) {   //question1
        choices1[i].onclick = function () {
          switch (i) {
            case 0:
              naruto.tally += 4
              sasuke.tally += 5
              neji.tally += 2
              sakura.tally += 7
              choji.tally += 6
              hinata.tally += 1
              shikamaru.tally += 3
              disabledBttn(choices1)
              break;
            case 1:
              naruto.tally += 1
              sasuke.tally += 7
              neji.tally += 5
              sakura.tally += 3
              choji.tally += 2
              hinata.tally += 4
              shikamaru.tally += 6
              disabledBttn(choices1)
              break;
            case 2:
              naruto.tally += 7
              sasuke.tally += 4
              neji.tally += 5
              sakura.tally += 1
              choji.tally += 3
              hinata.tally += 6
              shikamaru.tally += 2
              disabledBttn(choices1)
              break;
            case 3:
              naruto.tally += 6
              sasuke.tally += 5
              neji.tally += 4
              sakura.tally += 2
              choji.tally += 3
              hinata.tally += 1
              shikamaru.tally += 7
              disabledBttn(choices1)
              break;
          }
        }
      }


      for (let i = 0; i < choices2.length; i++) { //question2
        choices2[i].onclick = function () {
          switch (i) {
            case 0:
              naruto.tally += 7
              sasuke.tally += 4
              neji.tally += 5
              sakura.tally += 1
              choji.tally += 2
              hinata.tally += 3
              shikamaru.tally += 6
              disabledBttn(choices2)
              break;
            case 1:
              naruto.tally += 1
              sasuke.tally += 3
              neji.tally += 7
              sakura.tally += 2
              choji.tally += 5
              hinata.tally += 6
              shikamaru.tally += 4
              disabledBttn(choices2)
              break;
            case 2:
              naruto.tally += 1
              sasuke.tally += 5
              neji.tally += 6
              sakura.tally += 2
              choji.tally += 3
              hinata.tally += 4
              shikamaru.tally += 7
              disabledBttn(choices2)
              break;
            case 3:
              naruto.tally += 2
              sasuke.tally += 6
              neji.tally += 1
              sakura.tally += 5
              choji.tally += 3
              hinata.tally += 4
              shikamaru.tally += 7
              disabledBttn(choices2)
              break;
          }
        }

      }
      for (let i = 0; i < choices3.length; i++) {   //question3
        choices3[i].onclick = function () {
          switch (i) {
            case 0:
              naruto.tally += 7
              sasuke.tally += 1
              neji.tally += 5
              sakura.tally += 2
              choji.tally += 6
              hinata.tally += 4
              shikamaru.tally += 3
              disabledBttn(choices3)
              break;
            case 1:
              naruto.tally += 5
              sasuke.tally += 7 
              neji.tally += 6
              sakura.tally += 4
              choji.tally += 3
              hinata.tally += 1
              shikamaru.tally += 2
              disabledBttn(choices3)
              break;
            case 2:
              naruto.tally += 6
              sasuke.tally += 2
              neji.tally += 4
              sakura.tally += 1
              choji.tally += 6
              hinata.tally += 7
              shikamaru.tally += 5
              disabledBttn(choices3)
              break;
            case 3:
              naruto.tally += 6
              sasuke.tally += 4
              neji.tally += 3
              sakura.tally += 2
              choji.tally += 7
              hinata.tally += 1
              shikamaru.tally += 5
              disabledBttn(choices3)
              break;
          }
        }
      }
      for (let i = 0; i < choices4.length; i++) { //question4
        choices4[i].onclick = function () {
          switch (i) {
            case 0:
              naruto.tally += 1
              sasuke.tally += 4
              neji.tally += 7
              sakura.tally += 6
              choji.tally += 3
              hinata.tally += 5
              shikamaru.tally += 2
              disabledBttn(choices4)
              break;
            case 1:
              naruto.tally += 7
              sasuke.tally += 1
              neji.tally += 2
              sakura.tally += 5
              choji.tally += 6
              hinata.tally += 4
              shikamaru.tally += 3
              disabledBttn(choices4)
              break;
            case 2:
              naruto.tally += 1
              sasuke.tally += 7
              neji.tally += 6
              sakura.tally += 4
              choji.tally += 3
              hinata.tally += 5
              shikamaru.tally += 2
              disabledBttn(choices4)
              break;
            case 3:
              naruto.tally += 6
              sasuke.tally += 5
              neji.tally += 4
              sakura.tally += 1
              choji.tally += 3
              hinata.tally += 2
              shikamaru.tally += 7
              disabledBttn(choices4)
              break;
          }
        }
      }
      for (let i = 0; i < choices5.length; i++) {   //question5
        choices5[i].onclick = function () {
          switch (i) {
            case 0:
              naruto.tally += 6
              sasuke.tally += 2
              neji.tally += 1
              sakura.tally += 5
              choji.tally += 7
              hinata.tally += 3
              shikamaru.tally += 4
              disabledBttn(choices5)
              break;
            case 1:
              naruto.tally += 7
              sasuke.tally += 2
              neji.tally += 5
              sakura.tally += 1
              choji.tally += 6
              hinata.tally += 3
              shikamaru.tally +=4
              disabledBttn(choices5)
              break;
            case 2:
              naruto.tally += 3
              sasuke.tally += 5
              neji.tally += 4
              sakura.tally +=6
              choji.tally += 2
              hinata.tally += 7
              shikamaru.tally += 1
              disabledBttn(choices5)
              break;
            case 3:
              naruto.tally += 4
              sasuke.tally += 2
              neji.tally += 1
              sakura.tally += 4
              choji.tally += 6
              hinata.tally += 3
              shikamaru.tally += 7
              disabledBttn(choices5)
              break;
          }
        }
      }
    }

    const submitButtonElement = document.querySelector('#submit-button')
    submitButtonElement.onclick = function displayWinner() {
      finalTally = [naruto, sasuke, sakura, choji, neji, hinata, shikamaru];
      const sortedTally = finalTally.sort(function (a, b) { return b.tally - a.tally });
      const winner = sortedTally[0];
      submitButtonElement.disabled = true

      let image = document.createElement("IMG");
      const text = document.querySelector('#text')
      const pushImage = document.querySelector('#image')




      if (winner.tally <= 0) {
        let reminder = document.createElement('p')
        reminder.innerHTML = "You haven't answer anything yet. Try again"

        text.appendChild(reminder)

      }
      else {
        let txt = document.createElement('p')
        text.appendChild(txt)
        if (winner.name === "Naruto") {
          txt.innerHTML = "YOUR CHARACTER IS NARUTO"
          image.setAttribute("src", "https://i.pinimg.com/originals/db/e8/ae/dbe8ae9521e5f9bab72d0aea3e9c6739.jpg ");
          pushImage.appendChild(image)
        }
        else if (winner.name === "Sasuke") {
          txt.innerHTML = "YOUR CHARACTER IS UCHIHA SASUKE"
          image.setAttribute("src", "https://i.pinimg.com/originals/6e/9d/93/6e9d93b4a1a52e688adfa4316a9f7629.jpg");
          pushImage.appendChild(image)
        }
        else if (winner.name === "Neji") {
          txt.innerHTML = "YOUR CHARACTER IS HUYGA NEJI"
          image.setAttribute("src", "https://images7.alphacoders.com/100/1008846.png");
          pushImage.appendChild(image)
        }

        else if (winner.name === "Choji") {
          txt.innerHTML = "YOUR CHARACTER IS AKIMICHI CHOJI"
          image.setAttribute("src", "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/b329ad6c-3677-43fb-9430-e6d3275b63ce/d192ycm-24a48081-3db4-4801-a6d3-c90a480b7a3e.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvYjMyOWFkNmMtMzY3Ny00M2ZiLTk0MzAtZTZkMzI3NWI2M2NlXC9kMTkyeWNtLTI0YTQ4MDgxLTNkYjQtNDgwMS1hNmQzLWM5MGE0ODBiN2EzZS5qcGcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.0BEkjKRgGbbLhk2cAOaKAvaTHfJCR9cAEFq77OqXeHI");
          pushImage.appendChild(image)
        }

        else if (winner.name === "Sakura") {
          txt.innerHTML = "YOUR CHARACTER IS HARUNO SAKURA"
          image.setAttribute("src", "https://qph.fs.quoracdn.net/main-qimg-1c576d41279de4a76b273ff72efe785f");
          pushImage.appendChild(image)
        }

        else if (winner.name === "Hinata") {
          txt.innerHTML = "YOUR CHARACTER IS HYUGA HINATA"
          image.setAttribute("src", "https://www.kindpng.com/picc/m/177-1773083_hinata-hyuga-and-kiba-hinata-hyuga-byakugan-hd.png");
          pushImage.appendChild(image)
        }
        else if (winner.name === "Shikamaru") {
          txt.innerHTML = "YOUR CHARACTER IS NARA SHIKAMARU"
          image.setAttribute("src", "https://www.pngitem.com/pimgs/m/437-4372752_thumb-image-shikamaru-shippuden-nara-naruto-hd-png.png");
          pushImage.appendChild(image)
        }

      }

      resetFunc()

    }

    let reset = document.querySelector('#reset')
    function resetFunc() {
      let btn = document.createElement("BUTTON");
      btn.id = "resetbtn"
      btn.innerHTML = "TRY AGAIN";
      reset.appendChild(btn)

    }

    chooseAns()
  }


