const bttObserver = new IntersectionObserver(entries =>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            document.querySelector('.back-button').classList.add('is-visible')
        }else{
            document.querySelector('.back-button').classList.remove('is-visible')
        }
    })
   })
   bttObserver.observe(document.querySelector('.wrapper'))

   //same code as the scrolling animation