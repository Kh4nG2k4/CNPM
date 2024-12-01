// Toggle between sections
document.getElementById("personal-btn").addEventListener("click", function () {
    toggleSection("personal", this);
});
document.getElementById("addAccount-btn").addEventListener("click", function () {
    toggleSection("addAccount", this);
});
document.getElementById("updateAccount-btn").addEventListener("click", function () {
    toggleSection("updateAccount", this);
});
document.getElementById("updateFace-btn").addEventListener("click", function () {
    toggleSection("updateFace", this);
});
document.getElementById("deleteAccount-btn").addEventListener("click", function () {
    toggleSection("deleteAccount", this);
});


function toggleSection(sectionId, button) {
    const sections = document.querySelectorAll(".section");
    const buttons = document.querySelectorAll(".nav-item");

    // Hide all sections and reset buttons
    sections.forEach((section) => section.classList.add("hidden"));
    buttons.forEach((btn) => btn.classList.remove("active"));

    // Show the selected section and activate its button
    document.getElementById(sectionId).classList.remove("hidden");
    button.classList.add("active");
}

document.getElementById("logout-btn").addEventListener("click", function () {
    showToast("Đăng xuất thành công!", "success");
    setTimeout(function() {
        window.location.href = "index.html";
    }, 1500);
});


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

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('sidebar-open');
}

// Example data for accounts (replace this with real data from a database or API)
const accounts = [
    { id: "A123", username: "user1", password: "password123", accountType: "admin", roleId: "1" },
    { id: "B456", username: "user2", password: "password456", accountType: "user", roleId: "2" }
];

// Handle form submit for searching account
document.getElementById("search-account-form").addEventListener("submit", function (e) {
    e.preventDefault();

    // Get the input account ID
    const accountId = document.getElementById("account-id").value.trim();

    // Search for the account in the accounts data
    const account = accounts.find(acc => acc.id === accountId);

    // Show the result or error message
    const resultSection = document.getElementById("search-result");

    if (account) {
        // Display account details
        document.getElementById("result-account-id").textContent = account.id;
        document.getElementById("result-username").textContent = account.username;
        document.getElementById("result-password").textContent = account.password;
        document.getElementById("result-account-type").textContent = account.accountType;
        document.getElementById("result-role-id").textContent = account.roleId;

        // Make the result visible
        resultSection.classList.remove("hidden");
    } else {
        // Display an error if the account is not found
        showToast("Mã tài khoản không tồn tại!", "error");
        resultSection.classList.add("hidden");
    }
});

// Lắng nghe sự kiện click vào nút "Cập nhật"
document.getElementById("update-btn").addEventListener("click", function () {
    const imageInput = document.getElementById("upload-image");
    const fileName = document.getElementById("file-name");
    const imagePreview = document.getElementById("image-preview");

    // Kiểm tra nếu ảnh đã được chọn
    if (imageInput.files.length === 0) {
        showToast("Vui lòng chọn ảnh trước khi cập nhật!", "error"); // Thông báo lỗi
    } else {
        showToast("Cập nhật khuôn mặt thành công!", "success"); // Thông báo thành công
        fileName.textContent = "";
        imagePreview.src = "";
    }
});

// Xử lý hiển thị preview ảnh
document.getElementById("upload-image").addEventListener("change", function (e) {
    const file = e.target.files[0];
    const fileName = document.getElementById("file-name");
    // const previewContainer = document.getElementById("preview-container");
    const imagePreview = document.getElementById("image-preview");

    if (file) {
        fileName.textContent = file.name; // Hiển thị tên file
        const reader = new FileReader();
        
        reader.onload = function (e) {
            // Hiển thị ảnh preview
            imagePreview.src = e.target.result;
        };
        
        reader.readAsDataURL(file);
    } else {
        fileName.textContent = "";
    }
});

// Lắng nghe sự kiện thay đổi lựa chọn loại tài khoản
document.getElementById("account-role").addEventListener("change", function () {
    const role = this.value;
    const studentInfo = document.getElementById("student-info");
    const teacherAdminInfo = document.getElementById("teacher-admin-info");

    // Ẩn tất cả các trường thông tin trước
    studentInfo.classList.remove("active");
    teacherAdminInfo.classList.remove("active");

    // Hiển thị thông tin tương ứng với loại tài khoản
    if (role === "student") {
        studentInfo.classList.add("active");
    } else if (role === "teacher" || role === "admin") {
        teacherAdminInfo.classList.add("active");
    }
});

// Đảm bảo rằng khi trang tải, các trường tương ứng sẽ được hiển thị
window.addEventListener("load", function () {
    const role = document.getElementById("account-role").value;
    const studentInfo = document.getElementById("student-info");
    const teacherAdminInfo = document.getElementById("teacher-admin-info");

    if (role === "student") {
        studentInfo.classList.add("active");
    } else if (role === "teacher" || role === "admin") {
        teacherAdminInfo.classList.add("active");
    }
});
