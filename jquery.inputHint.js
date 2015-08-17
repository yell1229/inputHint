(function(global,$){
    $.fn.inputHint = $.fn.inputHint || function(hint_txt){
        var $this = this;
        var $hint_txt = hint_txt||'data-hint';

        $.each($this,function(index,el){
            var $$this = $this.eq(index);

            $$this.focus(function(){ 
                var $val = $$this.val();
                var $data_hint = $$this.attr($hint_txt);
                if($val==$data_hint){
                    $$this.val('');
                }
            });
            
            $$this.blur(function(){
                var $val = $$this.val();
                var $data_hint = $$this.attr($hint_txt);
                if($val==''){
                    $$this.val($data_hint);
                }
            });

        });
    };
})(window,window.jQuery);