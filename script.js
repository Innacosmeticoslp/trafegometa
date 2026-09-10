```javascript
/*
  ==========================================
  CORA HIBISCO
  LANDING PAGE
  ==========================================
*/


/*
  SCROLL SUAVE
*/

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      function(event) {

        const target =
          document.querySelector(
            this.getAttribute("href")
          );


        if (!target) {
          return;
        }


        event.preventDefault();


        target.scrollIntoView({

          behavior: "smooth",

          block: "start"

        });

      }
    );

  });



/*
  CONTROLE DOS CTAs

  Todos os botões de compra já apontam
  diretamente para a página:

  https://www.innacosmeticos.com.br/produtos1/bastao-multifuncional
*/


const ctaButtons =
  document.querySelectorAll(
    ".primary-button, .nav-button, .mobile-buy, .secondary-button"
  );


ctaButtons.forEach(button => {

  button.addEventListener(
    "click",
    function() {

      console.log(
        "CTA CORA clicado:",
        this.innerText.trim()
      );

    }
  );

});



/*
  FAQ

  Mantém somente uma pergunta aberta
  por vez.
*/

document
  .querySelectorAll("details")
  .forEach(item => {

    item.addEventListener(
      "toggle",
      function() {

        if (this.open) {

          document
            .querySelectorAll("details")
            .forEach(other => {

              if (other !== this) {

                other.removeAttribute(
                  "open"
                );

              }

            });

        }

      }
    );

  });
```
