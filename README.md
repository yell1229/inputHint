## inputHint


 1. 셀렉터가 tag인경우,모든 tag에 적용되기때문에 class로 target을 만든다.
 2. data-hint와 value를 동일하게 설정한다.
 3. default : data-hint 변경을 원하는경우 .inputHint('attr')적어준다.

기본 사용 예시)

    <input type="text" value="예시입니다." data-hint="예시입니다.">
    <textarea data-hint="2예시입니다.">2예시입니다.</textarea>
    
    $('input,textarea').inputHint();
    $('.input_hint').inputHint();


변경 예시)

    <input type="text" value="예시입니다." title="예시입니다.">
    <textarea title="2예시입니다.">2예시입니다.</textarea>
    
    $('input,textarea').inputHint('title');
 