$(document).ready(function () {
    $('.ham_btn').on('click', function () {
        $('.ham_line1').toggleClass('active_hl1');
        $('.ham_line2').toggleClass('active_hl2');
        $('.ham_line3').toggleClass('active_hl3');
        $('.mobile_menu').toggleClass('active');
    });

    $('.cathalog_btn').on('click', function () {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $("#modal_cathalog").modal('show');
        } else {
            $("#modal_cathalog").modal('hide');
        }
    });

    $("#modal_cathalog").on('hide.bs.modal', function () {
        $('.cathalog_btn').toggleClass('active');
    });
    
    $('.more').on('click', function () {
       $(this).removeClass('on_small');
       $(this).css('display', 'none');
       $('.more' + $(this).attr('target')).removeClass('hiden_block');
    });
    
    $('.point').on('click', function () {
       $('.rem_label').removeClass('active');
       $('#label_' + $(this).attr('target')).addClass('active');
    });
    
    $('.img_switch').on('click', function () {
       $(this).parent().parent().parent().children('.' + $(this).attr('target')).attr('src', $(this).attr('big-img'));
    });
});


