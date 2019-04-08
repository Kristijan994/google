import React, { useEffect } from 'react';
import useJquery from 'react-use-jquery';

export default function Scripts() {
  const $ = useJquery();
  
  useEffect(() => {
    if ($) {
      $(function(){
        // jQuery Functions
        var $search_key = $('input.search-key');
        var $search_dropdown = $('div.search-dropdown').hide();
        var $keyup_result = $('span.keyup-result');

        $search_key.keyup(function(e){
          $(this).addClass('custom-form-active');
          $search_dropdown.fadeIn();
          $search_dropdown.find('ul li').show();
          
          if($(this).val().length > 0) {
            $keyup_result.empty();
          }
          if($(this).val().length === 0) {
            $search_dropdown.hide();
            $(this).removeClass('custom-form-active');
          }
          if($(this).val().length > 25) {
            $search_dropdown.find('ul li').hide();
          }

          // Check for Values
        });

        var $btn_search = $('.btn-search');
        $btn_search.click(function(){
          $search_key.append($(this).clone());
        });

      });
    }
  }, [$]);
  
  return <div className="Scripts" />;
}