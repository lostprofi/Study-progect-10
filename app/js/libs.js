$('document').ready(()=>{
    
    
    const $navToggler = $('#navToggler');
    
    $navToggler.on('click', ()=>{
        
        const $navCollapse = $('#navCollapse');
        
        $navCollapse.slideToggle();
    })
    
})