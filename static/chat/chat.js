document.addEventListener("DOMContentLoaded", () => {
    const chatIcon = document.createElement("div");
    chatIcon.style.position = "fixed";
    chatIcon.style.bottom = "20px";
    chatIcon.style.right = "20px";
    chatIcon.style.width = "60px";
    chatIcon.style.height = "60px";
    chatIcon.style.backgroundColor = "#007bff";
    chatIcon.style.borderRadius = "50%";
    chatIcon.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    chatIcon.style.cursor = "pointer";
    chatIcon.style.display = "flex";
    chatIcon.style.alignItems = "center";
    chatIcon.style.justifyContent = "center";
    chatIcon.style.color = "#fff";
    chatIcon.style.fontSize = "24px";
    chatIcon.innerText = "💬";
    document.body.appendChild(chatIcon);

    const chatBox = document.createElement("div");
    chatBox.style.position = "fixed";
    chatBox.style.bottom = "90px";
    chatBox.style.right = "20px";
    chatBox.style.width = "300px";
    chatBox.style.height = "400px";
    chatBox.style.backgroundColor = "#fff";
    chatBox.style.border = "1px solid #ccc";
    chatBox.style.borderRadius = "8px";
    chatBox.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    chatBox.style.display = "none";
    chatBox.style.flexDirection = "column";
    document.body.appendChild(chatBox);

    chatIcon.addEventListener("click", () => {
        chatBox.style.display = chatBox.style.display === "none" ? "flex" : "none";
    });

    // Form for chat
    const form = document.createElement("form");
    form.innerHTML = `
        <select name="category" style="width: 100%; padding: 10px; margin-bottom: 10px;">
            <option value="technical">مشکلات فنی</option>
            <option value="consultation">مشاوره پوستی</option>
        </select>
        <textarea name="message" placeholder="پیام خود را وارد کنید..." style="width: 100%; height: 200px; padding: 10px; margin-bottom: 10px;"></textarea>
        <button type="submit" style="width: 100%; padding: 10px; background-color: #007bff; color: #fff; border: none; border-radius: 4px;">ارسال</button>
    `;
    chatBox.appendChild(form);

    form.addEventListener("submit", async (e) => {
        e.preventDefault();
        const category = form.category.value;
        const message = form.message.value;

        const response = await fetch("/api/chat/send-message/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ category, message }),
        });

        if (response.ok) {
            alert("پیام شما ارسال شد!");
            form.reset();
            chatBox.style.display = "none";
        } else {
            alert("خطایی رخ داده است!");
        }
    });
});
