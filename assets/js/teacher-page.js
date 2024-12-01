// Toggle between sections
document.getElementById("personal-info-btn").addEventListener("click", function () {
  toggleSection("personal-info", this);
});
  
document.getElementById("class-list-btn").addEventListener("click", function () {
  toggleSection("class-list", this);
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

// Xử lý vòng lặp 3 trạng thái cho nút điểm danh
const statusButtons = document.querySelectorAll(".status-btn");

statusButtons.forEach((button) => {
  // Thiết lập trạng thái mặc định là 'none'
  button.dataset.status = "none";

  button.addEventListener("click", () => {
    // Lấy trạng thái hiện tại
    const currentStatus = button.dataset.status;

    // Xử lý vòng lặp 3 trạng thái: none -> present -> absent -> none
    if (currentStatus === "none") {
      button.dataset.status = "present";
      button.className = "status-btn present"; // Cập nhật lớp CSS
    } else if (currentStatus === "present") {
      button.dataset.status = "absent";
      button.className = "status-btn absent"; // Cập nhật lớp CSS
    } else if (currentStatus === "absent") {
      button.dataset.status = "none";
      button.className = "status-btn none"; // Cập nhật lớp CSS
    }
  });
});

// Logout button functionality
document.getElementById("logout-btn").addEventListener("click", () => {
  showToast("Đăng xuất thành công!", "success");
  // Redirect to login page
  setTimeout(function() {
    window.location.href = "index.html";
  }, 1500);
});

document.addEventListener("DOMContentLoaded", () => {
  const updateBtn = document.querySelector(".update-btn");
  const cancelBtn = document.querySelector(".cancel-btn");
  const modal = document.getElementById("confirmationModal");
  const confirmYes = document.getElementById("confirmYes");
  const confirmNo = document.getElementById("confirmNo");

  // Khi nhấn vào "Cập nhật", chuyển nó thành "Hủy"
  updateBtn.addEventListener("click", () => {
    updateBtn.classList.add("hidden");
    cancelBtn.classList.remove("hidden");
  });

  // Khi nhấn vào "Hủy", hiển thị modal xác nhận
  cancelBtn.addEventListener("click", () => {
    modal.classList.remove("hidden");
    modal.style.display = "flex";
  });

  // Khi nhấn nút "Yes", lưu thay đổi và đóng modal
  confirmYes.addEventListener("click", () => {
    showToast("Thay đổi đã được lưu!", "success");
    // Bạn có thể thay thế dòng alert này bằng một hành động thực tế, như lưu vào cơ sở dữ liệu
    modal.classList.add("hidden"); // Đóng modal
    modal.style.display = "none";
    cancelBtn.classList.add("hidden");
    updateBtn.classList.remove("hidden");
  });

  // Khi nhấn nút "No", hủy thay đổi và đóng modal
  confirmNo.addEventListener("click", () => {
    showToast("Thay đổi không được lưu!", "error");
    modal.classList.add("hidden"); // Đóng modal
    modal.style.display = "none";
    cancelBtn.classList.add("hidden");
    updateBtn.classList.remove("hidden");
  });
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