
/* 隐藏内容 */
function toggleContent(button, content) {
    if (content.style.display === "none") {
        content.style.display = "block";
        button.textContent = "\u2191收起";
    } else {
        content.style.display = "none";
        button.textContent = "\u2193展开";
    }
}
// 给每个按钮绑定事件处理
document.querySelectorAll(".buttonDark").forEach((button, index) => {
    const content = document.querySelectorAll(".dark")[index];
    button.addEventListener("click", function() {
        toggleContent(button, content);
    });
});

/* 复制文本功能 */
async function copyText(Id_1, id_2) {
    const textToCopy = document.getElementById(Id_1).textContent;

    try {
        await navigator.clipboard.writeText(textToCopy);
        const copyIcon = document.getElementById(id_2);
        copyIcon.style.display = "none"; // 隐藏图标
        const successText = document.createElement("span");
        successText.id = "successText";
        successText.innerText = "复制成功";
        successText.style.color = "rgb(99, 174, 82)";
        copyIcon.parentNode.insertBefore(successText, copyIcon.nextSibling);
        setTimeout(() => {
            successText.remove(); 
            copyIcon.style.display = "inline"; 
        }, 1000);
    } catch (err) {
        console.error("复制失败:", err);
    }
}

/* 八卦图旋转 */
  /*       let angle = 0; // 初始角度
        const img = document.getElementById('bagua'); // 获取具有 id 为 bagua 的图片元素

        // 旋转函数
        function rotateImage() {
            angle += 1; // 每次增加 1 度
            img.style.transform = `rotate(${angle}deg)`; // 旋转图片
        }

        // 启动旋转
        function startRotation() {
            setInterval(rotateImage, 5); // 每 500 毫秒调用一次 rotateImage 函数
        }

        // 页面加载后自动开始旋转
        window.onload = startRotation; */
