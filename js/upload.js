$(function(){
    $('.c-upload-table tr').click(function(){
        if($(this).index()==0){
            return;
        }
        $('.c-upload-table tr').removeClass('chose');
        $(this).addClass('chose');
    })
})
