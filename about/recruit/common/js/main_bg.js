//���[�f�B���O���
$(window).on('load',function(){    
          $("#youtube-area").addClass('appear');
        $("#loading").addClass('disappear');
});
//youtube API
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var ytPlayer;
function onYouTubeIframeAPIReady() {
    ytPlayer = new YT.Player('youtube', {//�����\����������ID���w��
        videoId: 'Kq95zgCrxeY',//����̃A�h���X�̎w��
        playerVars: {
            playsinline: 1,// �C�����C���Đ����s��
            autoplay:1,//�����Đ����s��
            fs:0,//�S��ʕ\���{�^����\�����Ȃ�    
            rel: 0,// �Đ����̓���Ɠ����`�����l���̊֘A�����\��
            controls: 0,// �v���[���[ �R���g���[����\�����Ȃ�
            modestbranding: 1, // YouTube���S�̔�\��
            iv_load_policy: 3, // �A�m�e�[�V�����̔�\��
            start:50,//50�b�ォ�瓮�悪�X�^�[�g
        },    
        events: {//�@�C�x���g
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

//�~���[�g�ɂ��Ă���Đ�����ݒ�
function onPlayerReady(event) {
  event.target.mute();
  event.target.playVideo();
}


//���[�v�ݒ�
function onPlayerStateChange(event) {
 if (event.data == YT.PlayerState.ENDED) {
    event.target.playVideo();
  }
}