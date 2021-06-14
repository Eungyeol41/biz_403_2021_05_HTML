# image slide 원리

## image slide를 구현하기 위한 box layout 구성
- 1개의 이미지를 보여줄 layout을 구성 : div.main
- 보여줄 이미지들 전체를 img tag에 나열 : img src=""
- 나열된 이미지들을 div tag(div.images)로 묶고 div tag를 flex로 변환
    이미지들이 가로방향으로 한 줄로 나열된다
- 현재까지에서 나열된 이미지들은 이미지를 둘러싼 박스의 크기와 상관없이 무조건 자신의 크기대로 모양을 유지하는 성질이 있다.
- div.images를 감싸는 또 하나의 div box를 만든다(div.mask)
    그리고 이 box(div.mask)의 overflow:hidden으로 설정
    여기까지 진행을 하면 가로로 나열된 image들이 모두 감춰지고 div.mask box크기만큼만 보여지게 된다

## image slide를 구현하기 위한 Animation
- 1개의 이미지 크기만큼을 오른쪽으로 계속해서 이동하기
- @keyframe 속성을 사용하여 애니메이션 설정을 만들ㄴ다
- 가장 간단하게 0%(시작) 어떤 모양, 위치, 100%(종료) 어떤 모양, 위치 정하기