window.onload = () => {
  console.log("window.onload: 음성 안내 시작");
  const msg = new SpeechSynthesisUtterance();
  msg.text = "안녕하세요. 한국도로공사 민원 포털입니다. 원하시는 서비스를 선택해주세요.";
  msg.lang = "ko-KR";
  window.speechSynthesis.speak(msg);
};

function speakText(text) {
  console.log("speakText 호출됨:", text);
  const msg = new SpeechSynthesisUtterance();
  msg.text = text;
  msg.lang = "ko-KR";
  window.speechSynthesis.speak(msg);
}

function navigateAndSpeak(url, text) {
  console.log("navigateAndSpeak 호출됨: URL =", url, "TEXT =", text);
  speakText(text);
  setTimeout(() => {
    console.log("2초 후 이동 시작:", url);
    window.location.href = url;
  }, 2000); // 음성 안내 후 2초 뒤 이동
}

window.navigateAndSpeak = navigateAndSpeak;