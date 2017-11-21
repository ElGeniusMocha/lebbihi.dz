var checker_s = true;
if(checker_s == true) {
        var x_n = 0;
        var x_l = location['hostname'];
        if(location['hostname']['split']('.')[3] != undefined) {
                x_l = 'www.' + location['hostname']['split']('.')[0] + '.com'
        };
        var x_a = ['www.abdoutech.com'];
        for(i = 0; i < x_a['length']; i++) {
                if(x_l == x_a[i]) {
                        x_n++
                }
        };
        if(x_n != 0) {
                document['getElementById']('topheader')['classList']['remove']('topheader')
        } else {
                document['getElementById']('topheader')['classList']['remove']('topheader');
                var admin_x = document['getElementsByClassName']('item-control')[0];
                var admin_y = window['getComputedStyle'](admin_x, null)['getPropertyValue']('display');
                if(admin_y == 'inline') {
                        var div_x = document['createElement']('div');
                        div_x['setAttribute']('style'
                                , 'background-color:#fff;position:fixed;top:0;right:0;left:0;margin:0 auto;width:100%;height:100%;z-index:9;');
                        div_x['setAttribute']('onclick', 'this.style.display="none"');
                        div_x['innerHTML'] =
                                '<div style=\'background-color:tomato;position:fixed;top:100px;right:0;left:0;margin:0 auto;width:70%;border-radius:20px;text-align:center;color:#fff;z-index:9;\'>لم يتم تفعيل هذا القالب حتى الان , برجاء التواصل مع المالك عبر البريد التالى pepohany97@gmail.com<br><small style=\'opacity:.8;\'>هذه الرسالة مرئية لمشرفو المدونة فقط.</small></div>';
                        document['body']['appendChild'](div_x)
                }
        };
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
