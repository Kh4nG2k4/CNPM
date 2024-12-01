// Toggle between sections
document.getElementById("personal-info-btn").addEventListener("click", function () {
  toggleSection("personal-info", this);
});
  
document.getElementById("attendance-history-btn").addEventListener("click", function () {
  toggleSection("attendance-history", this);
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

document.getElementById("view-btn").addEventListener("click", function () {
  alert("Xem ảnh khuôn mặt");
  // Show images in a modal or separate page if images exist
});

document.getElementById("update-btn").addEventListener("click", function () {
    const statusCell = document.getElementById("face-photo-status").querySelector(".status");
    // Implement file input functionality for uploading images (or open a modal)
    let fileInput = document.createElement("input");
    fileInput.type = "file";
    fileInput.accept = "image/*";
    fileInput.multiple = true; // Allow multiple files (5 images)
    
    fileInput.addEventListener("change", function() {
        if (fileInput.files.length > 0) {
            statusCell.textContent = "Đã có";
            statusCell.classList.add("has-photo");
          } else {
            statusCell.textContent = "Null";
            statusCell.classList.remove("has-photo");
        }
    });

    fileInput.click(); // Trigger file input dialog
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
