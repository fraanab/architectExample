     // scroll animation for portfolio
     const observer = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                document.querySelectorAll('.itemA')[0].classList.add('leftAnim')
                document.querySelectorAll('.itemB')[0].classList.add('rightAnim')
                document.querySelectorAll('.itemA')[1].classList.add('leftAnim')
            }
        })
       })
       observer.observe(document.querySelector('.gallery-item'))