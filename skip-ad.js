    //<![CDATA[

    function checkAdblockUser() {
        var myTestAd = $( '.myTestAd' );
        
        document.cookie = "adblockUser=0; expires=Saturday, 08-Oct-2016 03:26:21 UTC";

        if ( myTestAd.filter( ':visible' ).length === 0 ||
            myTestAd.filter( ':hidden' ).length > 0 ||
            myTestAd.height() === 0 ) {
            //console.log( 'adblockUser' );
            document.cookie = "adblockUser=1; expires=Saturday, 08-Oct-2016 03:26:21 UTC";
        }
    }

    $( document ).ready( function () {
        window.setTimeout( function () {
            checkAdblockUser();
        }, 1500 );
    } );

// http://stackoverflow.com/a/5766416
    $( function () {
        var counter = $( 'a.skip-ad' );

        ( function () {
            var time = 12000,
                delta = 1000,
                tid;

            tid = setInterval( function () {
                if ( window.blurred ) {
                    return;
                }
                time -= delta;
                counter.text( 'Please Wait ' + ( time / 1000 ) + 's' );
                if ( time <= 0 ) {
                    counter.text( 'Skip Ad' );
                    clearInterval( tid );
                    $( '#go-link' ).addClass( 'go-link' );
                    $( '#go-link.go-link' ).submit();
                }
            }, delta );
        } )();

        document.onblur = function () {
            window.blurred = true;
        };
        document.onfocus = function () {
            window.blurred = false;
        };
    } );


    /**
     * Report invalid link
     */
    $( "#go-link" ).one( "submit", function ( e ) {
        e.preventDefault();
        var goForm = $( this );

        if ( !goForm.hasClass( 'go-link' ) ) {
            return;
        }

        var submitButton = goForm.find( 'button' );

        $.ajax( {
            dataType: 'json', // The type of data that you're expecting back from the server.
            type: 'POST', // he HTTP method to use for the request
            url: goForm.attr( 'action' ),
            data: goForm.serialize(), // Data to be sent to the server.
            beforeSend: function ( xhr ) {
                submitButton.attr( "disabled", "disabled" );
                //goForm.replaceWith( '<a href="#" class="btn btn-default skip-ad" onclick="javascript: return false;">Skip Ad</a>' );
            },
            success: function ( result, status, xhr ) {
                //console.log( result );
                if ( result.url ) {
                    //console.log( result.message + ' - ' + result.url );
                    //window.location.href = result.url;
                    $( 'a.skip-ad' ).attr( 'href', result.url ).removeAttr( 'onclick' );
                    //submitButton.text( 'Redirecting...' );
                    //goForm.replaceWith( '<button class="btn btn-default" onclick="javascript: return false;">Redirecting...</button>' );
                } else {
                    alert( result.message );
                }
            },
            error: function ( xhr, status, error ) {
                alert( "An error occured: " + xhr.status + " " + xhr.statusText );
            },
            complete: function ( xhr, status ) {

            }
        } );
    } );



var cfJsHost = (("https:" == document.location.protocol) ? "https://" : "http://");
document.write(unescape("%3Cscript src='" + cfJsHost + "dflzqrzibliy5.cloudfront.net/includes/tinybox/tinybox.js?8998' type='text/javascript'%3E%3C/script%3E"));

$(document)['ready'](function () {
        $('.abdelali-prot')['html']('<a href="http://www.abdoutech.com" rel="dofollow" target="_blank">تطوير و تصميم :عبدو تكنولوجي</a>');
        setInterval(function () {
                if (!$('.abdelali-prot:visible')['length']) {
                  window['location']['href'] = 'http://www.abdoutech.com';
                };
            }, 3000);
    });

//]]>
