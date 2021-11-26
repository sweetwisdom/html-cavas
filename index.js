function drawCanvas(imgObj) {
  var c = document.getElementById("temp");
  c.width = 1168;
  c.height = 861;
  var ctx = c.getContext("2d");
  ctx.font = "bold 28px 'SimSun'";
  ctx.fillStyle = "#151515";
  addmore(ctx);
  ctx.drawImage(imgObj, 0, 0); // 背景图

  ctx.fillText($("#your_name").val(), 410, 416); // 姓名
  ctx.fillText($("input:radio[name=your_sex]:checked").val(), 640, 416); //性别
  ctx.fillText($("#your_school").val(), 410, 485); //位置
  // 偏移位置 x y
  ctx.fillText($("#other").val(), 600, 485); //位置
  $("#temp").show();
}

function gen_zkz_func() {
  var img = document.getElementById("base");
  drawCanvas(img);
}

function addmore(myCan) {
  var imgt = new Image();
  imgt.src = "yz.png";

  imgt.onload = function () {
    let a = 0.65;
    let b = 0.59;

    myCan.drawImage(imgt, 1168 * a, 861 * b, 300, 237);
  };
}
// function drawCanvas(imgObj) {
//   var c = document.getElementById('temp')
//   c.width = 861
//   c.height = 1168
//   var ctx = c.getContext('2d')
//   ctx.font = "bold 28px 'SimSun'"
//   ctx.fillStyle = '#151515'

//   ctx.drawImage(imgObj, 0, 0) // 背景图

//   ctx.fillText($('#your_name').val(), 410, 416) // 姓名
//   ctx.fillText($('input:radio[name=your_sex]:checked').val(), 640, 416) //性别
//   ctx.fillText($('#your_school').val(), 410, 485) //位置
//   // 偏移位置 x y
//   ctx.fillText($('#other').val(), 600, 485) //位置
//   $('#temp').show()
// }
