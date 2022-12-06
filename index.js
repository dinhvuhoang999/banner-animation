let textBanner = document.querySelector(".title-banner");
const newArrText = textBanner.innerText.split("");

const splitText = newArrText.map((i) => {
  const newText = `<span>${i}</span>`;
  return newText;
}); 

textBanner.innerHTML = splitText.toString().replaceAll(",", "");

let textBannerSpan = document.querySelectorAll(".title-banner span");
console.log('textBannerSpan', textBannerSpan);


[].forEach.call(textBannerSpan, function(i, idx) {
  console.log(i);
  let idexNew = idx + 1;
  let styleSheet = document.styleSheets[0];
  console.log(idexNew);
  var rule = '.title-banner span:nth-child(' + idexNew + ')  {animation-delay: ' + (0.2 * idexNew) + 's; }';
  
  styleSheet.insertRule(rule, 1);
});

