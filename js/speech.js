window.onload = () => {
  const msg = new SpeechSynthesisUtterance();
  msg.text = "안녕하세요. 민원 포털에 오신 것을 환영합니다.";
  msg.lang = "ko-KR";
  window.speechSynthesis.speak(msg);
};

function navigateTo(url) {
  window.location.href = url;
}