

        const result = []
        const btn = document.querySelector('button');

        const start = () => { 
            if(result.length === 6) return;
            
            const randomResult = Math.floor(Math.random() * 49 + 1 );

            for(let i = 0; i < result.length; i++) {
                if(randomResult === result[i]) {
                    return start()
                }
            }

            const div = document.createElement('div')
            div.textContent = randomResult;
            document.body.appendChild(div)
            result.push(randomResult)

        }

        btn.addEventListener('click', start)