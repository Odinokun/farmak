module.exports = function() {

  // begin scroll 2 ancore desktop menu
  $(function() {
    $('.top-tabs__item[href*=\\#]').on("click", function(e){
      $('.top-tabs__item').removeClass('active');
      $(this).addClass('active');

      let activeTab = $(this).data('tab');

      //перестраиваем блоки в необходимом порядке
      $('#tabs').removeClass('tabs--01, tabs--02, tabs--03');
      $('#tabs').addClass('tabs--' + activeTab);

      //задаем нечетный блок
      $('.tab').removeClass('active');

      if (activeTab === '01') {
        $('.tab--01').addClass('active');
      } else if (activeTab === '02') {
        $('.tab--01').addClass('active');
      } else if (activeTab === '03') {
        $('.tab--02').addClass('active');
      }

      //scroll down
       let anchor = $(this);
       $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 0 + 'px'
       }, 1000);
    });
    return false;
  });
  // end scroll 2 ancore desktop menu

};