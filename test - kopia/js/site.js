
        const btn = document.querySelector('[data-option="toggle"]')

        btn.addEventListener('click', function () {
            const element = document.querySelector(btn.getAttribute('data-target'))

            const contains = element.sty



            if(element.style.display === "none") {
                element.style.display = "block";
            }
            else {
                element.style.display = "none";
            }

            // btn.classList.toggle('btn-outline-dark', !contains)
            // btn.classList.toggle('btn-toggle-white', !contains)
        })
