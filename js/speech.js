window.onload = () => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = "안녕하세요. 한국도로공사 민원 포털입니다. 원하시는 서비스를 선택해주세요.";
  msg.lang = "ko-KR";
  window.speechSynthesis.speak(msg);
};

function speakText(text) {
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "ko-KR";
  window.speechSynthesis.speak(msg);
}

function navigateAndSpeak(url, text) {
  speakText(text);
  setTimeout(() => {
    window.location.href = url;
  }, 2000); // 음성 안내 후 2초 뒤 이동
}

window.navigateAndSpeak = navigateAndSpeak;