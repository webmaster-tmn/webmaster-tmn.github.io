
$(function(){
	var calcPanel = $('.calc-panel'),
			body = $('body');

	$(document).on('click', '.js-favToggleLink', function(){
			body.toggleClass('is-fav-nav-open');
			calcPanel.toggleClass('is-open');
	});

	$(document).on('click', '.js-favHideLink', function(){
			calcPanel.removeClass('is-open');
			body.removeClass('is-fav-nav-open');
	});

	$(window).on('load resize', function(){
			if($(window).width() <= 767){
					windowHeightSize();
			}
	});

	windowHeightSize();

	function windowHeightSize(){
			setTimeout(function() {
					$('.window-image__size.height').width($('.window-image__elem img').outerHeight());
			}, 1);
	}

	if($('body').find('.calc').length){
			$('body').addClass('calc-page');
			$('.window-type__elem:first').trigger('click');
	}

	/*if($(window).width()<=767){
			$('.js-sashesRow').append($('.sashes-bl'));
	}*/

	// var locationHref = window.location.href;
	// if(locationHref.indexOf('?product=') >= 1){
	// 		var id = locationHref.split('?product=')[1];
	// 		$('[name="decisions"]').val(id).trigger('change');
	// }
});
$(function(){
	$('.js-select').styler({
		singleSelectzIndex: 1,
		selectSmartPositioning: false,
		selectSearch: $(this).data('search') || false,
		onFormStyled: function () {
			
			$('.select__color .jq-selectbox__dropdown li').each(function () {
				var img = $(this).data('img');
				$(this).prepend('<img class="color-p" src="'+img+'">');
			});
		}
	});
});
windowHeightSize();
	
function windowHeightSize(){
		setTimeout(function() {
				$('.window-image__size.height').width($('.window-image__elem img').outerHeight());
		}, 1);
}
function decles (count, words) {
	function cizz(n,c){
	    return c[0]+((/^[0,2-9]?[1]$/.test(n))?c[2]:((/^[0,2-9]?[2-4]$/.test(n))?c[3]:c[1]))
	}
	return cizz(count, words);
}
window.calculator = {
	windows: [],
	data: {
		
			"glazed": [
				{
					"id": 0,
					"title": "Двухкамерный стеклопакет",
					"code": "two"
				},
				{
					"id": "17172",
					"title": "Однокамерный энергосберегающий стеклопакет",
					"code": "odnokamernyy-energosberegayushchiy-steklopaket"
				},
				{
					"id": "17173",
					"title": "Однокамерный стеклопакет с использованием триплекса",
					"code": "odnokamernyy-steklopaket-s-ispolzovaniem-tripleksa"
				},
				{
					"id": "17174",
					"title": "Антирезонансный шумозащитный стеклопакет",
					"code": "antirezonansnyy-shumozashchitnyy-steklopaket"
				},
				{
					"id": "17175",
					"title": "Двухкамерный энергосберегающий стеклопакет",
					"code": "dvukhkamernyy-energosberegayushchiy-steklopaket"
				},
				{
					"id": "17176",
					"title": "Мультифункциональный солнцезащитный стеклопакет",
					"code": "multifunktsionalnyy-solntsezashchitnyy-steklopaket"
				}
			],
			"colors": [
				{
					"id": 1,
					"title": "Белый",
					"image": "img/color/color_white.jpg"
				},
				{
					"id": 2,
					"title": "Цветной",
					"image": "img/color/color_multi.png"
				}
			],
			"sashes": [
				{
					"id": "g",
					"title": "Глухое"
				},
				{
					"id": "po",
					"title": "Поворотно-откидное"
				},
				{
					"id": "p",
					"title": "Поворотное"
				},
				{
					"id": "o",
					"title": "Откидное"
				}
			],
			"formats": [
				{
					"id": 1,
					"title": "Одностворчатое окно",
					"sashes": [
						"p"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 2,
					"title": "Двухстворчатое окно",
					"sashes": [
						"g",
						"po"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 3,
					"title": "Трехстворчатые окна",
					"sashes": [
						"g",
						"po",
						"g"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 4,
					"title": "Трехстворчатые окна с фрамугой",
					"sashes": [
						"o",
						"g",
						"po",
						"g"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 5,
					"title": "Балконный блок двухстворчатый",
					"sashes": [
						"po",
						"g"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 6,
					"title": "Балконный блок одностворчатый",
					"sashes": [
						"po"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				},
				{
					"id": 7,
					"title": "Нестандартная конструкция",
					"sashes": [
						"g",
						"po",
						"g"
					],
					"width_range": {
						"min": 0,
						"max": 99999
					},
					"height_range": {
						"min": 0,
						"max": 99999
					}
				}
			],
			"sashes_table": {
				"1": [
					[
						"po",
						"p",
						"o",
						"g"
					]
				],
				"2": [
					[
						"g",
						"p",
						"po",
						"o"
					],
					[
						"o",
						"g",
						"p",
						"po"
					]
				],
				"3": [
					[
						"p",
						"g",
						"o",
						"po"
					],
					[
						"o",
						"g",
						"p",
						"po"
					],
					[
						"o",
						"po",
						"g",
						"p"
					]
				],
				"4": [
					[
						"po",
						"g",
						"p",
						"o"
					],
					[
						"po",
						"o",
						"g",
						"p"
					],
					[
						"po",
						"p",
						"g",
						"o"
					],
					[
						"g",
						"o"
					]
				],
				"5": [
					[
						"g",
						"p",
						"po",
						"o"
					],
					[
						"o",
						"g",
						"p",
						"po"
					]
				],
				"6": [
					[
						"po",
						"p",
						"o",
						"g"
					]
				],
				"7": [
					[
						"p",
						"g",
						"o",
						"po"
					],
					[
						"o",
						"g",
						"p",
						"po"
					],
					[
						"o",
						"po",
						"g",
						"p"
					]
				],
				"balcony": [
					[
						"door"
					]
				]
			
		}
	},
	inputs: {
			//decisions:   	'select[name="decisions"]',
			//profiles:    	'select[name="profiles"]',
			glazed:      	'select[name="glazed"]',
			colors:      	'select[name="color"]',
			width:       	'input[name="width"]',
			height:      	'input[name="height"]',
			//name:        	'.window-form input[name="name"]',
			//description: 	'.window-form textarea[name="description"]',
	},
	init: function () {
			var urlPage = window.location.href;

			for (input in this.inputs) {
					this.inputs[input] = $(this.inputs[input]);
					watchInput(input);
			};

			this.getBuffer();
			calculator.setupDataRanges(1);
			

			$('.js-new-window').click(function () {
					calculator.newWindow();
					calculator.renderPage();
			});
			$('.window-type__elem').click(function () {
					calculator.current.formats = $(this).data('id');

					for (var i = 0; i < calculator.data.formats.length; i++) {
							if (calculator.data.formats[i].id == calculator.current.formats) {
									calculator.current.sashes = calculator.data.formats[i].sashes.slice(0);

									// set min/max ranges and default values for width&height fields
									calculator.setupDataRanges(i);

									break;
							}
					}

					calculator.saveBuffer();
					calculator.renderPage();
					calculator.renderCart();
			});
			
	},
	setupDataRanges: function (i) {
			var widthField = $('.window-form form input[name="width"]');
			var heightField = $('.window-form form input[name="height"]');

			var minWidth = this.data.formats[i].width_range.min;
			var maxWidth = this.data.formats[i].width_range.max;

			var minHeight = this.data.formats[i].height_range.min;
			var maxHeight = this.data.formats[i].height_range.max;

			this.current.width = Math.max(this.current.width, minWidth);
			this.current.height = Math.max(this.current.height, minHeight);

			// widthField.val(this.current.width);
			widthField.attr('data-min', minWidth);
			widthField.attr('data-max', maxWidth);
			// widthField.attr('placeholder', 'от ' + minWidth + ' до ' + maxWidth);

			// heightField.val(this.current.height);
			heightField.attr('data-min', minHeight);
			heightField.attr('data-max', maxHeight);
			// heightField.attr('placeholder', 'от ' + minHeight + ' до ' + maxHeight);

			// validateRange(widthField);
			// validateRange(heightField);

			this.renderCart();
			this.renderPage();
	},
	renderCart: function () {
			var htmlPopup = '';
			var htmlTextarea = '';
			var html = '';
			var windowLangTitlte = $('.calc-window__item-list').data('windows-title');

			for (var i = 0; i < this.windows.length; i++) {
					var dimensions = this.windows[i].width + ' x ' + this.windows[i].height + ' мм';
					var svgId = (this.windows[i].formats == 1 ? '' : '-' + this.windows[i].formats);

					var copyButton = 	'<div class="calc-window__item-icon calc-window__item-file"\
										onclick="calculator.copyWindow(' + this.windows[i].id + ');">\
														<svg class="icon icon-doc">\
															<use xlink:href="#icon-doc"></use>\
														</svg>\
													</div>';

					var deleteButton = 	'<div class="calc-window__item-icon calc-window__item-delete"\
															onclick="calculator.removeWindow(' + this.windows[i].id + ');">\
															<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">\
															<path d="M16 1.39113L14.6089 0L8 6.60887L1.39113 0L0 1.39113L6.60887 8L0 14.6089L1.39113 16L8 9.39113L14.6089 16L16 14.6089L9.39113 8L16 1.39113Z" fill="#ffffff"/>\
															</svg>\
															</div>';

					var sashesList = [];
					for(var key = 0 in this.windows[i].sashes) {
							sashesList.push(getNameById(this.windows[i].sashes[key], this.data.sashes));
					}
					var descTitle = this.data.formats[this.windows[i].formats - 1].title;
					var descSashes = ' ' + sashesList.join(', ') + '  ';
					var descColor = getNameById(this.windows[i].colors, this.data.colors);
					

					var desc = this.data.formats[this.windows[i].formats - 1].title + ' (' + sashesList.join(', ') + '), '
							+ getNameById(this.windows[i].colors, this.data.colors);
							var decsGlazed = '';
							decsGlazed += getNameById(this.windows[i].glazed, this.data.glazed);
					if(this.windows[i].glazed > 0) {
							desc += ', ' + getNameById(this.windows[i].glazed, this.data.glazed);
							
					}
					htmlTextarea +='<textarea class="visually-hidden" name="'+ windowLangTitlte +' №' + (i + 1) + '"><ol><li><span>'+ descTitle + ' ' +' '+ dimensions +' </span></li><li>'+ descSashes+ '</li><li>'+ descColor+ '</li><li>'+ decsGlazed+ '</li></ol></textarea>';
					// htmlPopup = html;

					html += '<div class="calc-window__item">\
					<div class="calc-window__item-text">\
							<h3>'+ windowLangTitlte +' №' + (i + 1) + '</h3>\
					</div>\
					<div class="calc-window__item-box">\
						<div class="calc-window__item-icons">\
								'+ (this.windows.length > 1 ? deleteButton : '') +'\
						</div>\
							<ol><li><span>'+ descTitle + ' ' +' '+ dimensions +' </span></li><li>'+ descSashes+ '</li><li>'+ descColor+ '</li><li>'+ decsGlazed+ '</li></ol>\
					</div>\
				</div>';
			}
			$('.calc-window__item-list').html(html);
			$('.popupWindow').html(htmlTextarea + html);
			//$('.ordering-panel__control span').html(this.windows.length+decles(this.windows.length,[' ок','он','но','на']));
	},
	editWindow: function(url){
			var hrefLink = window.location.protocol + "//" + window.location.hostname + "/calc/?edit=" + url;
			window.open(hrefLink);
	},
	checkDecisions: function() {
			var _this = this;
			var currentDecisionId = this.current.decisions;
			this.data.decisions.forEach(function (decision, i) {
					if (decision.id == currentDecisionId) {
							_this.current.profiles = decision.profile;
							_this.current.glazed = decision.glazed;
							_this.current.colors = _this.data.colors[0].id;
					}
			});
	},
	renderPage: function () {
			//this.inputs.name.val(this.current.name);
			//this.inputs.description.val(this.current.description);

			//this.inputs.width.val(this.current.width);
			renderText('.window-image__size.width span #data', (this.current.width != '' ? this.current.width : 0));
			//this.inputs.height.val(this.current.height);
			renderText('.window-image__size.height span #data', (this.current.height != '' ? this.current.height : 0));
			//this.inputs.description.val(this.current.description);

			//renderHtml(this.data.decisions, this.inputs.decisions, this.current.decisions);
			//renderHtml(this.data.profiles, this.inputs.profiles, this.current.profiles);
			renderHtml(this.data.glazed, this.inputs.glazed, this.current.glazed);
			renderHtml(this.data.colors, this.inputs.colors, this.current.colors, 'c');


			$('.window-type__elem').removeClass('is-active');
			$('.window-type__elem[data-id="'+this.current.formats+'"]').addClass('is-active');

			$('.js-favToggleLink .calc-panel__count').html('- '+this.windows.length+decles(this.windows.length,[' ок','он','но','на']));

			var html = '';
			for (var i = 0; i < this.windows.length; i++) {
					html += '<div class="window-fav__elem" data-window-id="'+this.windows[i].id+'" onclick="calculator.openWindow('+this.windows[i].id+')">\
														<div class="window-fav__icon">\
																<svg class="icon icon-window-type'+(this.windows[i].formats!=1?'-'+this.windows[i].formats:'')+'">\
																		<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-window-type'+(this.windows[i].formats!=1?'-'+this.windows[i].formats:'')+'"></use>\
																</svg>\
														</div>\
														<div class="window-fav__info">\
																<div class="window-fav__title">'+this.windows[i].name+'</div>\
																<div class="window-fav__size">'+this.windows[i].width+' х '+this.windows[i].height+' мм</div>\
														</div>\
														<div class="window-fav__controls">\
																<div onclick="calculator.copyWindow('+this.windows[i].id+'); return false;" class="window-fav__control">\
																		<svg class="icon icon-doc ">\
																				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-doc"></use>\
																		</svg>\
																</div>\
																<div onclick="calculator.removeWindow('+this.windows[i].id+'); return false;" class="window-fav__control window-fav__trash">\
																		<svg class="icon icon-trash ">\
																				<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#icon-trash"></use>\
																		</svg>\
																</div>\
														</div>\
												</div>';
					$('.calc-panel__window .window-fav').html(html);
			}

			if($('.window-fav__elem').length <= 1){
					$('.window-fav__trash').hide();
			}

			var currentFormat = this.current.formats;

			if(currentFormat == 7){
					$('.js-windowDescription').show();
			}
			else {
					$('.js-windowDescription').hide();
			}

			if (this.current.sashes.length) {
					var sashes = '';
					$('.sashes-bl').html('');
					for (var i = 0; i < this.current.sashes.length; i++) {
							sashes = '<div data-title="' + (i + 1) + ' створка" class="sashes"><select data-ind="'+i+'" class="select select-sashes js-select"><optgroup>';

							if (typeof this.data.sashes_table[currentFormat][i] != 'undefined') {
									for (var k = 0; k < this.data.sashes_table[currentFormat][i].length; k++) {
											var current = this.data.sashes_table[currentFormat][i][k];
											for (var j = 0; j < this.data.sashes.length; j++)
											{
													if (current == this.data.sashes[j].id)
													{
															sashes +='<option value="'+this.data.sashes[j].id+'">'+this.data.sashes[j].title+'</option>'
													}
											}
									}
							}
							else
							{
									for (var k = 0; k < this.data.sashes.length; k++) {
											sashes +='<option value="'+this.data.sashes[k].id+'">'+this.data.sashes[k].title+'</option>'
									}
							}

							sashes += '</optgroup></select></div>';
							$('.sashes-bl').append(sashes);
							$('.select-sashes[data-ind="'+i+'"]').val(this.current.sashes[i]);
					}
					$('.select-sashes').styler({
							singleSelectzIndex: 1,
							selectSmartPositioning: false,
							selectSearch: $(this).data('search') || false,
							onSelectClosed: function () {
									// var ind = $(this).data('ind');
									// for (var i = 0; i < calculator.current.sashes.length; i++) {
									//     if (ind == i) {
									//         calculator.current.sashes[i] = $(this).find('select').val();
									//         break;
									//     }
									// }
									// calculator.saveBuffer();
									// calculator.getImage();
							}
					});

					$('select.select-sashes').on('change', function(){
							var ind = $(this).parent().data('ind');
							for (var i = 0; i < calculator.current.sashes.length; i++) {
									if (ind == i) {
											calculator.current.sashes[i] = $(this).val();
											break;
									}
							}
							calculator.saveBuffer();
							calculator.getImage();
							calculator.renderCart();
					});
			}
			else {
					$('.sashes-bl').html('<textarea placeholder="описание конструкции в произвольной форме"></textarea>');
			}
			this.getImage();
	},
	getImage: function () {
			var link = 'img/window/'+this.current.formats+'_stv/';
			var linkSashesPart = '';
			for (var i = 0; i < this.current.sashes.length; i++) {
					linkSashesPart += this.current.sashes[i];
					if (i != this.current.sashes.length-1) {
							linkSashesPart +='_';
					}
			}
			linkSashesPart +='.jpg';
			link = link + linkSashesPart;

			$('.window-image__elem img').attr({'src':link});
	},
	copyWindow: function (id) {
			for (var i = 0; i < this.windows.length; i++) {
					if(this.windows[i].id == id) {
							var copiedObject = $.extend({}, this.windows[i]);
							copiedObject.id = Date.now();
							copiedObject.sashes = copiedObject.sashes.slice(0);
							//copiedObject.name += ' - копия';
							this.windows.push(copiedObject);
							// this.saveBuffer();
							this.renderPage();
					}
			}

			setTimeout(function(){
					$('.window-fav__elem:last').trigger('click');
			});
			this.renderCart();
	},
	removeWindow: function (id) {
			for (var i = 0; i < this.windows.length; i++) {
					if(this.windows[i].id == id) {
							this.windows.splice(i,1);
							this.saveBuffer();
							this.renderPage();
							this.renderCart();
					}
			}

			if(this.windows.length == 0) {
					localStorage.clear();
					return false;
			}

			if(this.windows.length <= 1) {
					// alert('Должно быть минимум одно окно');
					$('.window-fav__trash').css('display', 'none');
					return false;

			}
			if(this.windows.length > 1) {
					$('.window-fav__trash').css('display', 'block');
			}
	},
	openWindow: function (id) {
			for (var i = 0; i < this.windows.length; i++) {
					if(this.windows[i].id == id) {
							this.current = this.windows[i];
							for(var j = 0; j < this.data.formats.length; j++) {
									if(this.data.formats[j].id == this.current.formats) {
											this.setupDataRanges(j);
											break;
									}
							}
							this.saveBuffer();
							this.renderPage();
							$('.calc-panel').removeClass('is-open');
							$('body').removeClass('is-fav-nav-open');
							break;
					}
			}
	},
	initWindow: function (window) {
			for (var i = 0; i < this.data.formats.length; i++) {
					if (this.data.formats[i].id == window.formats) {
							window.sashes = this.data.formats[i].sashes.slice(0);
					}
			}
			this.windows.push(window);
			this.current = this.windows[this.windows.length-1];
	},
	newWindow: function () {
			this.initWindow({
					id: Date.now(),
					//name: "",
					width: 1300,
					height: 1460,
					//decisions: 0,//this.data['decisions'][0]['id'],
					//profiles: 0,//this.data['profiles'][0]['id'],
					glazed: 0,//this.data['glazed'][0]['id'],
					formats: this.data['formats'][0]['id'],
					colors: this.data['colors'][0]['id']
			});
			this.saveBuffer();
			this.renderCart();
			this.setupDataRanges(0);
	},
	getBuffer: function () {
			this.windows = JSON.parse(localStorage.getItem('windows'));
			if (!this.windows) {
					this.windows = [];
					this.newWindow();
			}
			else {
					this.current = this.windows[this.windows.length-1];
			}

			this.renderPage();

			for(input in this.inputs) {
					validateRange(this.inputs[input]);
			}
	},

	// saveBufferTimerId: 0,
	

	saveBuffer: function () {
			var windows = JSON.stringify(this.windows)
			localStorage.setItem('windows', windows);
			// console.log(windows);
			var form = $('.order-form')[0];
			var formData = new FormData(form);
			var json = JSON.stringify(this.windows);
			formData.append('windows',windows);
			$('input[name="windows"]').val(windows);
			clearTimeout(this.saveBufferTimerId);

			this.saveBufferTimerId = setTimeout(function() {
					$.ajax({
							// url: 'mail.php',
							data: {
									windows : windows,
							},
							type: 'POST',
							success: function(response) {
							}
					});
			}, 1000);

	},
		 		
	sendOrder: function (btn) {
			var form = $('.order-form')[0];
			var formData = new FormData(form);
			var json = JSON.stringify(this.windows);
			var redirectParam = $(btn).data('redirect-url');
			var ajaxUrl = $(btn).data('ajax-url');
			formData.append('windows',json);
			$(btn).attr('disabled', true);

					$.ajax({
						url: 'mail.php',
							data: formData,
							type: 'POST',
							contentType: false,
							processData: false,
							dataType: 'json',
							success: function(response) {
									$(btn).attr('disabled', false);

									if (response.status == 'success')
									{
											$.magnificPopup.open({
													items: {
															src: $('#smallSuccessForm'),
															type: 'inline'
													}
											});

											$.magnificPopup.instance.close = function () {
													$.magnificPopup.proto.close.call(this);
													window.location.href = '//' + window.location.hostname + redirectParam + '';
											};

											localStorage.clear();
											$('.input').val('');
											$('.checkbox:checked').removeAttr('checked');
											$('.select option:selected').removeAttr('selected');
											$('.ordering-wrap, .ordering-forms').hide();
											$('.ordering-panel__control-item:last').hide();

										
											dataLayer.push(gtmData);
									}
									else
									{
											$(form).find('.js-recaptcha-error').html(response.message);
											$(form).find('.js-recaptcha-error').attr('style', 'display: block !important');
									}
							}
					});
		
	},
	current: {},
	disableCopy: false,

	redrawTimer: 0,


	scheduleRedraw: function() {
			if(this.redrawTimer != 0) {
					clearTimeout(this.redrawTimer);
					this.redrawTimer = 0;
			}

			this.redrawTimer = setTimeout(function(context) {
					context.renderCart();
					context.renderPage();
			}, 1000, this);
	},
}

function getNameById (id, data) {
	for (var i = 0; i < data.length; i++) {
			if (data[i].id == id) {
					return data[i].title;
			}
	}
}

function getSashesNames (window) {
	var html = '';
	for (var i = 0; i < window.sashes.length; i++) {
			for (var k = 0; k < calculator.data.sashes.length; k++) {
					if( calculator.data.sashes[k].id == window.sashes[i]) {
							html += calculator.data.sashes[k].title+', ';
					}
			}
	}
	html = html.slice(0, -2);
	return html;
}

function formatStr(format) {
	var args = Array.prototype.slice.call(arguments, 1);
	return format.replace(/{(\d+)}/g, function(match, number) { 
		return typeof args[number] != 'undefined'
			? args[number] 
			: match
		;
	});
};


function validateRange(input) {
	var min = parseInt(input.attr('data-min'));
	var max = parseInt(input.attr('data-max'));
	var val = parseInt(input.val());
	var errorMessage = input.attr('data-error-text');

	if(min > 0 && max > 0) {

			if(min <= val && max >= val || input.val() == '') {
					input.parent().parent().removeClass('error');
					input.parent().siblings('.error-label').html('');
			} else {
					input.parent().parent().addClass('error');
					// input.siblings('.error-label').html('Введите значение от ' + min + ' до ' + max);
					// test {0} test 2 {1}
					input.parent().siblings('.error-label').html(formatStr(errorMessage, min, max));
			}
	}
}

function watchInput (inputKey){
	var type = '';
	var input = calculator.inputs[inputKey];
	if (input.attr('type') == 'text') {
			type = 'keyup';
	}
	else {
			type = 'change';
	}

	if(input.attr('data-min') > 0 && input.attr('data-max') > 0)
	{
			var min = input.attr('data-min');
			var max = input.attr('data-max');
			input.attr('placeholder', 'от ' + min + ' до ' + max);
	}

	input.on(type, function () {
			var _this = $(this);
			var val = _this.val();

			var fieldName = input.attr('name');
			if (fieldName == 'width' || fieldName == 'height') {
					var rep = /[-\.;":'a-zA-Zа-яА-Я]/;
					if (rep.test(val)) {
							val = val.replace(rep, '');
					}

					validateRange(_this);

					var min = input.attr('data-min');
					var max = input.attr('data-max');

					calculator.current[inputKey] = Math.min(max, Math.max(min, val));
			}
			else
			{
					calculator.current[inputKey] = val;
			}

			if (fieldName == 'decisions') {
					calculator.checkDecisions();
			}
			if (fieldName == 'profiles') {
					calculator.current.decisions = 0;
			}
			if (fieldName == 'glazed') {
					calculator.current.decisions = 0;
			}

			if(_this.attr('type') == 'text') {
					calculator.scheduleRedraw();
			} else {
					calculator.renderPage();
					calculator.renderCart();
			}

			calculator.saveBuffer();
	});
}

function renderText (selector, text) {
	$(selector).html(text);
}

function renderHtml (data, input, current, type) {
	var decisionHtml = '';
	for (var i = 0; i < data.length; i++) {
			decisionHtml += '<option '+(data[i].image?'data-img="'+data[i].image+'"':'')+' value="'+data[i].id+'">'+data[i].title+'</option>'
	}
	input.html('<optgroup>'+decisionHtml + '</optgroup>').val(current).trigger('refresh');

	if (type) {
			var c = '';
			for (var i = 0; i < data.length; i++) {
					if (data[i].id == current) {
							c = data[i].image;
					}
			}

			setTimeout(function(){
					$('.select__color .jq-selectbox__select img').remove();
					$('.select__color .jq-selectbox__select').prepend('<img class="color-p" src="'+c+'">');
			});

			$('.select__color .jq-selectbox__dropdown li').each(function () {
					var img = $(this).data('img');
					$(this).prepend('<img class="color-p" src="'+img+'">');
			});
	}
}


if($('.calc').length > 0){
	if (typeof calculatorData !== 'undefined'){
			calculator.data = calculatorData;
	}
	calculator.init();
	calculator.renderCart();
}
