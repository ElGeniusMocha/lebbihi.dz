function h12_lets_animate(ani_cont,ani_stl,ani_from,ani_to) {
	var ani_cont_elem = document.getElementById(ani_cont);
	var stl_value = parseInt(window.getComputedStyle(ani_cont_elem,null).getPropertyValue(ani_stl));
	if (stl_value < ani_to) {
			ani_cont_elem.style[ani_stl] = stl_value+2 + 'px';
			setTimeout('h12_lets_animate("' + ani_cont + '","' + ani_stl + '","' + ani_from + '","' + ani_to + '");',5);
	}
}
(function() {
	
	function r(r) {
		try {
			if (!window.location.ancestorOrigins) return;
			for (var n = 0, t = window.location.ancestorOrigins.length; n < t; n++) {
				r.call(null, window.location.ancestorOrigins[n], n)
			}
		} catch (o) {}
		return []
	}

	function n(r) {
		var n = [],
			t;
		do {
			t = t ? t.parent : window;
			try {
				r.call(null, t, n)
			} catch (o) {
				n.push({})
			}
		} while (t != window.top);
		return n
	}
	
	var t = n(function(r, n) {
		n.push({
			referrer: r.document.referrer || null,
			location: r.location.href || null
		})
	})
	
	r(function(r, n) {t[n].ancestor = r});
	
	var o = '';
	
	for (var e = t.length - 1; e >= 0; e--) {
		o = t[e].location;
		if (!o && e > 0) {
			o = t[e - 1].referrer;
			if (!o) {
				o = t[e - 1].ancestor
			}
		}
		if (o) {
			break
		}
	}
	var H12_TRef = o;
	o = encodeURIComponent(o);
	
	
	function getReferrer() {
		try {
			return window.top.document.referrer
		} catch (t) { return "ERR" }
	}
	
	function getOffsetPosition(t) {
		try {
			var e = [0, 0];
			if (null !== t && void 0 !== t) {
				var i = t.getBoundingClientRect();
				e = [Math.round(i.left), Math.round(i.top)]
			}
			return e
		} catch (m) { return [-1,-1] }
	}	
	
	function getOffsetPositionScroll(t) {
		try {
			var e = [0, 0];
			if (null !== t && void 0 !== t) {
				var i = t.getBoundingClientRect();
				var scrollTop = window.top.document.documentElement.scrollTop ? window.top.document.documentElement.scrollTop : window.top.document.body.scrollTop;
				var scrollLeft = window.top.document.documentElement.scrollLeft ? window.top.document.documentElement.scrollLeft : window.top.document.body.scrollLeft;
				e = [Math.round(i.left+scrollLeft), Math.round(i.top+scrollTop)]
			}
			return e
		} catch (m) { return [-1,-1] }
	}
	
	function getCurrentScroll() {
		try {
			var e = [0, 0];
			var scrollTop = window.top.document.documentElement.scrollTop ? window.top.document.documentElement.scrollTop : window.top.document.body.scrollTop;
			var scrollLeft = window.top.document.documentElement.scrollLeft ? window.top.document.documentElement.scrollLeft : window.top.document.body.scrollLeft;
			e = [Math.round(scrollLeft), Math.round(scrollTop)]
			return e
		} catch (m) { return [-1,-1] }
	}
	
	function getCurrentViewFrameSizeY() {
		try {
			var e = [0,0];
			CurScrTop = getCurrentScroll()[1];
			CurViewFrameHeight = getClientDimensions()[1];
			e = [Math.round(CurScrTop),Math.round(CurScrTop+CurViewFrameHeight)];
			//console.log('CurScrTop',CurScrTop,'CurViewFrameHeight',CurViewFrameHeight,'E',e);
			return e;
		} catch (e) { return [0,0] }	
	}
	
	function getClientDimensions() {
		try {
			var t = window.top.innerWidth || window.top.document.documentElement.clientWidth || window.top.document.body.clientWidth,
				e = window.top.innerHeight || window.top.document.documentElement.clientHeight || window.top.document.body.clientHeight;
				//23.04.17 Update - window.top.document.body.clientHeight || window.top.innerHeight || window.top.document.documentElement.clientHeight;
				//console.log('getClientDimensions',t,e);
			return [Math.round(t), Math.round(e)];
		} catch (i) {
			return [0,0];
		}
	}
	
	function getDocumentDimensions() {
		try {
			var D = window.top.document;
			//return [D.body.offsetWidth, Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight)]
			return [D.body.offsetWidth, Math.max(D.body.scrollHeight, D.documentElement.scrollHeight, D.body.offsetHeight, D.documentElement.offsetHeight, D.body.clientHeight, D.documentElement.clientHeight)]
		} catch (t) {
			return [-1,-1]
		}
	}
	
	function getLanguage() {
		try {
			if (navigator) {
				var t = [];
				return navigator.language && t.push(navigator.language), navigator.userLanguage && t.push(navigator.userLanguage), navigator.browserLanguage && t.push(navigator.browserLanguage), navigator.systemLanguage && t.push(navigator.systemLanguage), t.join(",")
			}
		} catch (e) { return 'ERR' }
	}
	
	function setStyle(elem, propertyObject) {
		//var el = document.getElementById(elId);
		for (var property in propertyObject) {
			try {
				elem.style[property] = propertyObject[property];
			} catch (e) {}
		}
	}
	
	function SMRCwriteCookie(name, value, days) {
		//Fix Days 
		if(days==null || days=='')days=365;
		 
		// Set Date
		var d=new Date();
		d.setTime(d.getTime()+(days*24*60*60*1000));
		var expires = '; expires=' + d.toGMTString();
		 
		// Write Cookie
		document.cookie = name + '=' + value + expires + '; path=/';
	}

	function SMRCreadCookie(name){ // by .fm 
		var c=document.cookie ;  
		if (c.indexOf(name)!=-1) {  
			pos1=c.indexOf('=', c.indexOf(name))+1;  
			pos2=c.indexOf(';',pos1);   
				// If last cookie 
				if(pos2==-1)    pos2=c.length;; 
			 
			data=c.substring(pos1,pos2);  
			 
			return data; 
		} 
	}

	function OnResizeHandler(AdListObjArray) {
	
		var __h12index_adlist;
		for	(__h12index_adlist = 0; __h12index_adlist < AdListObjArray.length; __h12index_adlist++) {
			__h12adlistjsonobj = AdListObjArray[__h12index_adlist];
				
			//console.log('GELDi.......');
			
			var int_h12_bname = __h12adlistjsonobj.h12_bname;
			var int_cntsty = __h12adlistjsonobj.cntsty;
			var int_h12_cnt_div = __h12adlistjsonobj.h12_cnt_div;
			var int_w = __h12adlistjsonobj.w;
			var int_h = __h12adlistjsonobj.h;
			var int_cdim = getClientDimensions();
			
			var int_adScl = int_cdim[0]/int_w;
			if (int_adScl > 1) { int_adScl = 1 }
			//console.log("int_adScl=",int_adScl,int_h12_cnt_div,int_h12_bname);
			
			if (int_adScl == 1) {
				//console.log("Screen > Ad Width, OnSize");
				
				int_cntsty.left = '50%';
				int_cntsty.marginLeft = '-' + Math.round(int_w/2) + 'px';
				int_cntsty.bottom = '0px';
				int_cntsty.marginBottom = '';
				
				var int_adSclStyle = {
									'-moz-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-webkit-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-o-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-ms-transform':'scale(' + int_adScl +', ' + int_adScl + ')', 
									'transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-moz-transform-origin':'top left',
									'-webkit-transform-origin':'top left',
									'-o-transform-origin':'top left',
									'-ms-transform-origin':'top left', 
									'transform-origin':'top left',
								}
				setStyle(int_h12_cnt_div,int_adSclStyle);
				//console.log('style pushed, onresize');
				
			} else {
			
				//console.log("Screen < Ad Width, OnSize");
				var int_adSclStyle = {
									'-moz-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-webkit-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-o-transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-ms-transform':'scale(' + int_adScl +', ' + int_adScl + ')', 
									'transform':'scale(' + int_adScl +', ' + int_adScl + ')',
									'-moz-transform-origin':'top left',
									'-webkit-transform-origin':'top left',
									'-o-transform-origin':'top left',
									'-ms-transform-origin':'top left', 
									'transform-origin':'top left',
								}
								
				setStyle(int_h12_cnt_div,int_adSclStyle)
				
				if (int_h12_bname == 'from bottom') {
					var adSclMLeft = (1-int_adScl)*int_w;
					var adSclMTop = (1-int_adScl)*int_h;
					//console.log('from bottom....',adSclMLeft,adSclMTop,int_adScl,int_h);
					int_h12_cnt_div.style.marginBottom = '-' + adSclMTop + 'px';
					int_h12_cnt_div.style.marginLeft = '';
					int_h12_cnt_div.style.left = '0px';
				}	
				
			}
		}
	}	
	
	var h12_js_animate;
	var divpos, js_animate;	
	var __h12index;
	for	(__h12index = 0; __h12index < h12_adarray.length; __h12index++) {
		__h12jsonobj = h12_adarray[__h12index];
		
		//document.write('<br>width:' + __h12jsonobj.width + ' height:' + __h12jsonobj.height + ' adcontainer: ' + __h12jsonobj.adcontainer);
		
		try {
			var h12divcid = __h12jsonobj.adcontainer;
			var h12_cnt_div = document.getElementById(h12divcid);
			
			var h12_btype = __h12jsonobj.type;
			var h12_bcode = __h12jsonobj.code;
			var h12_bsite = __h12jsonobj.site;
			var h12_bname = __h12jsonobj.name;
			var h12_bsize = __h12jsonobj.size;
			var h12_pback = __h12jsonobj.pb;
			var h12_pname = __h12jsonobj.pname;
			var h12_bplacement = __h12jsonobj.placement;
			var h12_bfreq = __h12jsonobj.freq;
			var w = __h12jsonobj.width; 
			var h = __h12jsonobj.height;
			var h12allowbackup = 'true';
			var h12_srvdom = __h12jsonobj.srvdom;
			
			//console.log('srvdom=',__h12jsonobj.srvdom);
			//var h12_srvdom = '\/\/erdal\/h12media\/tags';
			if ( (typeof (h12_srvdom) == 'undefined') || (h12_srvdom == null) )  { h12_srvdom = '\/\/tags.h12-media.com'; }			
			
			var h12_publish; h12_publish = 1;
			var h12b_appearance = '';
			if (h12_bcode == 'onvideo') { h12b_appearance = 'onvideo' }
			if ( (typeof (h12_bsite) != 'undefined') && (h12_bsite != null) )  { h12_bplacement = h12_bsite }
			
			
			
			switch (h12_btype) {
				
				case 'sliding' :
					h12allowbackup = 'false';
				
					var h12_topwin = false;
					if (window.top == window.self) { 
						h12_topwin = true;
					} else { 
						h12_topwin = false;
						
						break;
					}
				
					h12b_appearance = 'sliding';
				
					var cntsty = h12_cnt_div.style;
					//document.body.insertBefore(h12_cnt_div, document.getElementsByTagName("body")[0]);
					cntsty.display = 'none';
					cntsty.zIndex = '2147483647';
				
					//Burada sliding 'i set edecegiz. Frequnecy cappingi de dahil hepsini isleyecegiz.
					var half_ad_width = Math.round(w/2)
					var half_ad_height = Math.round(h/2)
					
					var mrc_cookname = h12_btype + '-' + h12_bplacement + '-' + h12_bname + '-' + h12_bsize;
					var smart_pub = 0;
					var smartcounter = 0;
					var smartcounter = SMRCreadCookie(mrc_cookname);
					if (smartcounter == null || smartcounter == '' || smartcounter == 'NaN') { smartcounter = 0; }
					smartcounter = parseInt(smartcounter);
					//console.log('smartcounter: ' + smartcounter);
					
					var ad_freq = h12_bfreq;
					if (ad_freq == "0") { ad_freq = "1000"; }
					//console.log('ad_freq=' + ad_freq);
					if (smartcounter < ad_freq) {
						smart_pub = 1;
						h12_publish = 1;
						//console.log(mrc_cookname + ' : smart_pub=1');
					} else {
						smart_pub = 0;
						h12_publish = 0;
						//console.log(mrc_cookname + ' : smart_pub=0');
					}

					if (smart_pub == 1) {
					
						my_smartcounter = parseInt(smartcounter) + 1;
						SMRCwriteCookie(mrc_cookname,my_smartcounter,1);
						
						switch (h12_bname) {
						
							case 'from left':
								divpos = 'left: -' + w + 'px; top: 25px;';
								cntsty.left = '-' + w + 'px';
								cntsty.top = '25px';
								
								js_animate = 'h12_lets_animate("' + h12divcid + '","left","' + w + '","0");';
								
								break;
								
							case 'from right':
								divpos = 'right: -' + w + 'px; top: 25px;';
								cntsty.right = '-' + w + 'px';
								cntsty.top = '25px';
								
								js_animate = 'h12_lets_animate("' + h12divcid + '","right","-' + w + '","0");';
								
								break;
								
							case 'from bottom right' :
							
								divpos = 'right: -' + w + 'px; bottom: 25px;';
								cntsty.right = '-' + w + 'px';
								cntsty.bottom = '25px';
								
								js_animate = 'h12_lets_animate("' + h12divcid + '","right","-' + w + '","20");';
								
								break;
								
							case 'from bottom left' :
							
								divpos = 'left: -' + w + 'px; bottom: 25px;';
								cntsty.left = '-' + w + 'px';
								cntsty.bottom = '25px';
								//console.log('buradayiz... from bottom left');
								js_animate = 'h12_lets_animate("' + h12divcid + '","left","-' + w + '","20");';
								
								break;
								
							case 'from bottom':
								divpos = 'left: 50%; margin-left: -' + half_ad_width + 'px; bottom: -' + h + 'px;';
								cntsty.left = '50%';
								cntsty.marginLeft = '-' + half_ad_width + 'px';
								cntsty.bottom = '-' + h + 'px';
								
								js_animate = 'h12_lets_animate("' + h12divcid + '","bottom","-' + h + '","0");';
								
								break;
								
							case 'central':
								divpos = 'left: 50%; top: 50%; margin-left: -' + half_ad_width + 'px; margin-top : -' + half_ad_height + 'px;';
								cntsty.left = '50%';
								cntsty.top = '50%';
								cntsty.marginLeft = '-' + half_ad_width + 'px';
								cntsty.marginTop = '-' + half_ad_height + 'px';
								
								break;
								
							default :
								cntsty.display = 'none';
								h12_publish = 0;
								
								break;
						}
						
						//cntsty.display = 'block';
						cntsty.zIndex = '21474836400';
						cntsty.position = 'absolute';
						cntsty.border = '0px solid #000';
						cntsty.textalign = 'center'; 
						cntsty.padding = '0px';
						//cntsty.backgroundColor = 'white';
						cntsty.width = w + 'px';
						cntsty.height = h + 'px';
						cntsty.position = 'fixed';
						h12_cnt_div.innerHTML = '<a href="javascript:void(0);" onclick="document.getElementById(\'' + h12divcid + '\').style.display=\'none\';"><div class="hoshaf_" id="hosht_qopek" style="clear: both; position: absolute; width: 58px; height: 24px; background-color: #ededed; text-align: center; padding: 0px; border: 1px solid #ededed; right: 0px; top: -24px; z-index: 21474836300; border-radius: 5px; background-image: url(\'' + h12_srvdom + '\/cl.png\'); background-repeat: no-repeat; background-position-x: 50%;"></div></a>';

						setTimeout(js_animate,2500);
						setTimeout('document.getElementById("' + h12divcid + '").style.display=\'block\';',2500);
					}

					//console.log('divpos var value=' + divpos);
					//console.log('js_animate var value=' + js_animate);
					
					document.body.insertBefore(h12_cnt_div, document.body.firstChild);
					//console.log('sliding moved to top!')
					
					//ad server ad type mapping for async sliding tags
					h12_btype = "sliding_async"

					break;
				case 'standard' :
					//console.log('Point 2');
					h12b_appearance = 'standard';
					h12_publish = 1;
					
					var cntsty = h12_cnt_div.style;
					cntsty.zIndex = '2147483647';
					
					break;
			}
			

			if (h12_publish == 1) {
				
				//console.log('Point 3');
				
				var i = document.createElement('iframe');
				i.id = h12divcid + '_ifrm';
				i.scrolling = 'no';
				i.frameBorder = 0;
				i.style.margin = 0;
				i.style.padding = 0;
				i.style.width = w + 'px';
				i.style.height = h + 'px';
				
			
				var href = getReferrer();
				var bpos = getOffsetPosition(h12_cnt_div);
				var bposscr = getOffsetPositionScroll(h12_cnt_div);
				var cdim = getClientDimensions();
				var ddim = getDocumentDimensions();
				var clngs = getLanguage();
				var cscr = getCurrentScroll();
				var cvfsy = getCurrentViewFrameSizeY()
				//var MinMaxYindextoView = [cvfsy[1]-300,cvfsy[1]+300];
				var MinMaxYindextoView = [bposscr[1]-100,bposscr[1]+100];
				
				if (h12_btype == 'sliding_async') {
						
					if (h12_bname == 'from bottom') {

						//console.log("Screen <= Ad Width");
						adScl = cdim[0]/w;
						if (adScl > 1) { adScl = 1 }
						
						//console.log("adScl=",adScl);
						
						if (adScl == 1) {
							//console.log("Screen > Ad Width");
							
							cntsty.left = '50%';
							cntsty.marginLeft = '-' + half_ad_width + 'px';
							cntsty.bottom = '-' + h + 'px';
							cntsty.marginBottom = '';
							
							var adSclStyle = {
												'-moz-transform':'scale(' + adScl +', ' + adScl + ')',
												'-webkit-transform':'scale(' + adScl +', ' + adScl + ')',
												'-o-transform':'scale(' + adScl +', ' + adScl + ')',
												'-ms-transform':'scale(' + adScl +', ' + adScl + ')', 
												'transform':'scale(' + adScl +', ' + adScl + ')',
												'-moz-transform-origin':'top left',
												'-webkit-transform-origin':'top left',
												'-o-transform-origin':'top left',
												'-ms-transform-origin':'top left', 
												'transform-origin':'top left',
											}
							setStyle(h12_cnt_div,adSclStyle);
							//console.log('style pushed');

						} else {						
							var adSclStyle = {
												'-moz-transform':'scale(' + adScl +', ' + adScl + ')',
												'-webkit-transform':'scale(' + adScl +', ' + adScl + ')',
												'-o-transform':'scale(' + adScl +', ' + adScl + ')',
												'-ms-transform':'scale(' + adScl +', ' + adScl + ')', 
												'transform':'scale(' + adScl +', ' + adScl + ')',
												'-moz-transform-origin':'top left',
												'-webkit-transform-origin':'top left',
												'-o-transform-origin':'top left',
												'-ms-transform-origin':'top left', 
												'transform-origin':'top left',
											}
							setStyle(h12_cnt_div,adSclStyle)
							

							adSclMLeft = (1-adScl)*w;
							adSclMTop = (1-adScl)*h;
							h12_cnt_div.style.marginBottom = '-' + adSclMTop + 'px';
							h12_cnt_div.style.marginLeft = '';
							h12_cnt_div.style.left = '0px';
						}
						
						
						(h12_adplacements = window.h12_adplacements || []).push({'h12divcid':h12divcid,'h12_bname': h12_bname,'cntsty': cntsty,'h12_cnt_div':h12_cnt_div,'w':w,'h':h});

						//console.log('here is array',window.h12_adplacements);
						
						try {
							window.top.addEventListener('resize', 
								function() { 
									OnResizeHandler(window.h12_adplacements);
								}
							,false);
							//console.log('window resize event has been created.');
						} catch (err) { 
							//console.log('onwindow resize event handler could not be created',err.message); 
						}

					}
					

											
						
				}
				
				//console.log("Doc Ref",href);
				//console.log("offset pos banner pos on page: ",bpos);
				//console.log("actual banner pos on page: ",bposscr); //IMPORTANT
				//console.log("View Frame Size: ",cdim);
				//console.log("Document Dimensions:",ddim);
				//console.log("Current Scroll X,Y",cscr);
				//console.log("Current View Frame Location Y Axix",cvfsy); //IMPORTANT
				//console.log("View Frame Location Y Axix Band",MinMaxYindextoView); //IMPORTANT
				//console.log("Languages",clngs);
				//console.log("Ad Size",h12_bsize);
				//console.log("Document Location",H12_TRef);
				
				var h12_topwin = false;
				if (window.top == window.self) { 
					h12_topwin = true;
					//console.log('h12_topwin=',h12_topwin);
				} else { 
					h12_topwin = false;
					
					var t = window,m=0;
					var frm_left=0, frm_top=0;
					do {
						m = m + 1;
						try {
							if (m > 1) { t = t.parent }
							//console.log('Frames',m);
							frm_left = frm_left + t.frameElement.getBoundingClientRect().left;
							frm_top = frm_top + t.frameElement.getBoundingClientRect().top;
						} catch (o) {
							//console.log('ERR FRAMES',o.message);
						}
					} while ((m<100) && (t.parent != t.self))

					CurScrDims = getCurrentScroll();
					frm_left = frm_left + CurScrDims[0];
					frm_top = frm_top + CurScrDims[1];
					bposscr = [Math.round(frm_left),Math.round(frm_top)];
					//console.log('Element Position from Frames',bposscr);
				}
				/*
				var locked = false;
				var runOnScroll =  function(evt) {
				  if(locked) return;
				  locked = true;
				  // ...your code goes here...
				  locked = false;
				};*/
				
				var h12_scrollable = 'true';
				var scr_handler = function (){};

				try {
					window.top.addEventListener('scroll', scr_handler);
				} catch (err) { 
					//console.log('ERR SCROLL'); 
					h12_scrollable = 'false'; 
				}
				
				if (h12_scrollable == 'true') {
					try {
						window.top.removeEventListener('scroll', scr_handler);
					} catch (err) {}
				}
				
				window.view_handler = function () {
					try {
						//window.top.addEventListener('scroll', scr_handler);
						var MyEl = h12_cnt_div;
						var m = getCurrentViewFrameSizeY();
						var bposscr = getOffsetPositionScroll(h12_cnt_div);
						var MinMaxYindextoView = [bposscr[1]-100,bposscr[1]+100]; //upt 24.04.17
						
						var viewed = '';
						//if ((MinMaxYindextoView[0] < bposscr[1]) && (bposscr[1] < MinMaxYindextoView[1])) {
						//if (((m[0] > MinMaxYindextoView[0]) && (m[0] < MinMaxYindextoView[1])) || ((m[1] > MinMaxYindextoView[0]) && (m[1] < MinMaxYindextoView[1]))) {
						if (((MinMaxYindextoView[0] > m[0]) && (MinMaxYindextoView[0] < m[1])) || ((MinMaxYindextoView[1] > m[0]) && (MinMaxYindextoView[1] < m[1]))) {
							viewed = 'true';
						} else {
							viewed = 'false';
						}
						//console.log('VIEW Y Axis Band',m,'Allowed Ranges Y Axis',MinMaxYindextoView,'Elem Position:',bposscr,'Viewed:',viewed,h12_cnt_div);
						//console.log('m',m);
						//console.log('MinMaxYindextoView',MinMaxYindextoView);
					} catch (err) { 
						//console.log('ERR SCROLL'); 
						h12_scrollable = 'false'; 
					}
				}
				
				view_handler();
				
				if (h12_scrollable == 'true') {
					try {
						//window.top.removeEventListener('scroll', scr_handler);
						//window.top.addEventListener('scroll', view_handler);
					} catch (err) {}
				}
				
				//console.log('Scrollable',h12_scrollable);				
				if ((typeof (h12_cnt_div) != 'undefined') && (h12_cnt_div != null)) { h12_cnt_div.appendChild(i); }
				
				var makine_tarih = new Date();
				var makine_tarih_d_index = makine_tarih.getDay(); //Day of Week Index
				var makine_tarih_h_index = makine_tarih.getHours(); //Hour of Day 0-23 Arasi Yawrucux.
				
				var h12_tags =  '<scr' + 'ipt src="'+ h12_srvdom +'\/v2\/tags.js?placement=' + h12_bplacement + '&allowbackup=' + encodeURIComponent(h12allowbackup) + '&appearance=' + h12b_appearance + '&type=' + h12_btype + '&size=' + h12_bsize + '&name=' + h12_bname + '&sability=' + h12_scrollable + '&bref=' + o + '&rnd=' + Math.random() % 99999999 + '&pb=' + h12_pback + '&pname=' + h12_pname + '&href=' + encodeURIComponent(href) + '&cvfsy=' + encodeURIComponent(cvfsy) + '&mmtitw=' + encodeURIComponent(MinMaxYindextoView) + '&bpos=' + encodeURIComponent(bpos) + '&bposscr=' + encodeURIComponent(bposscr) + '&cdim=' + encodeURIComponent(cdim) + '&ddim=' + encodeURIComponent(ddim) + '&clngs=' + encodeURIComponent(clngs) + '&mdi=' + encodeURIComponent(makine_tarih_d_index) + '&mhi=' + encodeURIComponent(makine_tarih_h_index) + '"><\/' + 'script>';
				
				i = (i.contentWindow) ? i.contentWindow : (i.contentDocument.document) ? i.contentDocument.document : i.contentDocument;
				i.document.open();
				//alert(window.parent.document.getElementById(h12divcid))
				i.document.write('<html><head><title><\/title><\/head><body style="margin:0;padding:0">')
				i.document.write('<script>');
				i.document.write('var h12divcid = "' + h12divcid + '";');
				i.document.write('var h12allowbackup = "' + h12allowbackup + '";');
				i.document.write('var sability = "' + h12_scrollable + '";');
				i.document.write('var mmtitw = "' + MinMaxYindextoView + '";');
				i.document.write('var bpos = "' + bpos + '";');
				i.document.write('var bposscr = "' + bposscr + '";');
				i.document.write('var cdim = "' + cdim + '";');
				i.document.write('var ddim = "' + ddim + '";');
				i.document.write('var clngs = "' + clngs + '";');
				i.document.write('var clngs = "' + clngs + '";');
				i.document.write('var cvfsy = "' + cvfsy + '";');
				i.document.write('var mdi = "' + makine_tarih_d_index + '";');
				i.document.write('var mhi = "' + makine_tarih_h_index + '";');
				i.document.write('<\/script>');
				i.document.write(h12_tags);
				i.document.write('<\/body><\/html>');
				i.document.close();
				i.width = w + 'px'; 
				i.height = h + 'px';
			
				//console.log('Point 6');
			}
		} catch(err) {
			var em_content = '';
			em_content = em_content + ' - ' + err.message;
			
			var cnt_url = '';
			try {
				cnt_url = document.location.href;
			} catch(err2) { em_content = em_content + ' - ' + err2.message; }
			
			var h12divcid = __h12jsonobj.adcontainer;
			var h12_cnt_div = document.getElementById(h12divcid);
			var i = document.createElement('img');
			i.id = h12divcid + '_img';
			i.style.margin = 0;
			i.style.padding = 0;
			i.style.width = '1px';
			i.style.height = '1px';
			i.src = '\/\/tags.h12-media.com\/pingback\/?platform=error&mes=' + encodeURIComponent(err.message + ' - ' + cnt_url);
			if ((typeof (h12_cnt_div) != 'undefined') && (h12_cnt_div != null)) { h12_cnt_div.appendChild(i); }

			try { console.log('My Error: ',err.message, err.line); } catch (x) {}
			
		}
	}
	window.h12_adarray.length = 0;
})();
