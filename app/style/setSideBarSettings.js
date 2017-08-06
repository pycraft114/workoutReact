/**
 * Created by chanwoopark on 2017. 7. 27..
 */

// 이건 sidebar에서밖에 안쓰인다면 sidebar component에 합치는게 좋을거 같음
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
