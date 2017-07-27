/**
 * Created by chanwoopark on 2017. 7. 27..
 */
export default function(){
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').addClass('active');
        $('.overlay').fadeIn(200);
    });


    $('#dismiss, .overlay').on('click', function () {
        $('#sidebar').removeClass('active');
        $('.overlay').fadeOut(200);
    });
}