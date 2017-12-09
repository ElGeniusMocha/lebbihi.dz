        var f_ooter = document['createElement']('DIV');
        f_ooter['setAttribute']('id', 'copyRight');
        f_ooter['innerHTML'] =
                '<a href=\'https://www.fb.com/m3awn\' target=\'_blank\'><img src=\'https://e.top4top.net/p_689a17gv1.png\'/>تصميم : فريق المعاون</a><div style=\'    float: right;line-height: 60px;text-align: center;margin-right: 20px;\'>جميع الحقوق محفوظة لعام' +
                new Date()['getFullYear']() + '</div>';
        document['getElementsByTagName']('footer')[0]['appendChild'](f_ooter);

        function fullload() {
                document['getElementById']('header_loading')['style']['opacity'] = '0';
                document['getElementsByClassName']('latest_topics')[0]['style']['display'] = 'block'
        }
}
