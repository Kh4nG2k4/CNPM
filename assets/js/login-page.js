function login(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;

    // Kiểm tra nếu chưa chọn vai trò
    if (!role) {
        showToast("Vui lòng chọn vai trò.", "error");
        return false;
    }

    // Kiểm tra thông tin đăng nhập (ở đây chỉ là ví dụ)
    if (!username || !password) {
        showToast("Vui lòng nhập đầy đủ thông tin.", "error");
        return false;
    }

    if (username === "admin" && password === "123456" && role === "admin") {
        showToast("Đăng nhập thành công!", "success");
        setTimeout(function() {
            window.location.href = "admin-page.html"; 
        }, 1500); 
    } else if (username === "student" && password === "159" && role === "student") {
        showToast("Đăng nhập thành công!", "success");
        setTimeout(function() {
            window.location.href = "student-page.html";
        }, 1500); 
    } else if (username === "teacher" && password === "123" && role === "teacher") {
        showToast("Đăng nhập thành công!", "success");
        setTimeout(function() {
            window.location.href = "teacher-page.html";
        }, 1500);
    } else {
        showToast("Tên người dùng hoặc mật khẩu không đúng!", "error");
    }
}

function togglePasswordVisibility() {
    const passwordInput = document.getElementById("password");
    const eyeIcon = document.getElementById("eye-icon");

    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        eyeIcon.src = "./assets/img/eye-open.svg";
    } else {
        passwordInput.type = "password";
        eyeIcon.src = "./assets/img/eye-crossed.svg";
    }
}

function showToast(message, type) {
    const toast = document.getElementById("toast");
    toast.textContent = message;

    // Xử lý loại thông báo (thành công, lỗi, thông tin)
    if (type === "error") {
        toast.classList.add("toast-error");
        toast.classList.remove("toast-success");
    } else if (type === "success") {
        toast.classList.add("toast-success");
        toast.classList.remove("toast-error");
    }

    // Hiển thị toast
    toast.classList.add("show");

    // Ẩn toast sau 2 giây
    setTimeout(() => {
        toast.classList.remove("show");
    }, 2000);
}