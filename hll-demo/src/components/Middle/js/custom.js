// myScript.js

import $ from 'jquery';

export function initializeCustom() {
  $(function () {
    // mobile menu   JS
    $('.menu-icon .hamburger').on('click', function () {
      $('.hamburger-menu-wrapper').css('display', 'flex');
    });
    $('.hamburger-menu-wrapper .menu-close').on('click', function () {
      $('.hamburger-menu-wrapper').fadeOut();
    });

    var $contents = $('.hamburger-nav li ul').hide();
    $('.hamburger-nav li span').on('click', function () {
      var getThis = $(this);
      var $current = $(this).next().stop(true, true).slideToggle(500, function () {
        getAccordion();
      });
      $contents.not($current).slideUp(600, function () {
        getAccordion();
      });

      function getAccordion() {
        $('.hamburger-nav li span').removeClass('open');
        if ($(getThis).closest('li').find('ul').is(':visible')) {
          $(getThis).addClass('open');
        } else {
          $('.hamburger-nav li span').removeClass('open');
        }
      }

    });

    // main tabs JS
    $('.tab-lists li:eq(0)').addClass('selected');
    $('.tab-content:eq(0)').show();
    $('body').on('click', '.tab-lists li ', function () {
      var getRel = $(this).attr('rel');
      $(this).addClass('selected').siblings().removeClass('selected')
      $('.tab-content').hide();
      $('#' + getRel).fadeIn(200);
    });

    // facility tabs JS
    $('.tab-facility li:eq(0)').addClass('selected');
    $('.tab-fcontent:eq(0)').show();
    $('body').on('click', '.tab-facility li ', function () {
      var getRel = $(this).attr('rel');
      $(this).addClass('selected').siblings().removeClass('selected')
      $('.tab-fcontent').hide();
      $('#' + getRel).fadeIn(200);
    });

    // summary tabs JS
    $('.tab-summary li:eq(0)').addClass('selected');
    $('.tab-scontent:eq(0)').show();
    $('body').on('click', '.tab-summary li ', function () {
      var getRel = $(this).attr('rel');
      $(this).addClass('selected').siblings().removeClass('selected')
      $('.tab-scontent').hide();
      $('#' + getRel).fadeIn(200);
    });

    // table tabs JS  
    var tabWrapper = $('#tab-block'),
        tabMnu = tabWrapper.find('.tab-mnu  li'),
        tabContent = tabWrapper.find('.tab-cont > .tab-pane');
    
    tabContent.not(':first-child').hide();
    
    tabMnu.each(function(i){
      $(this).attr('data-tab','tab'+i);
    });
    tabContent.each(function(i){
      $(this).attr('data-tab','tab'+i);
    });
    
    tabMnu.click(function(){
      var tabData = $(this).data('tab');
      tabWrapper.find(tabContent).hide();
      tabWrapper.find(tabContent).filter('[data-tab='+tabData+']').show(); 
    });
    
    $('.tab-mnu > li').click(function(){
      var before = $('.tab-mnu li.active');
      before.removeClass('active');
      $(this).addClass('active');
    });
  });
}
