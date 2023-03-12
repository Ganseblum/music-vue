setFontSize();

export function setFontSize() {
  const baseSize = 16; //基础大小
  const windowWidth = document.documentElement.clientWidth > 768 ? 1920 : 768;
  const scale = document.documentElement.clientWidth / windowWidth; //缩放大小
  // const fontSize = Math.max(scale * baseSize, 16); //最小缩放值不得小于16
  const fontSize = scale * baseSize; //最小缩放值不得小于16
  document.documentElement.style.fontSize = fontSize + "px";
  console.log(scale * baseSize);

  // console.log(windowWidth, scale, fontSize);
}

window.addEventListener("resize", () => {
  setFontSize();
});
