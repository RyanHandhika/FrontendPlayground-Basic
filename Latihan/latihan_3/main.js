// 🔥 Todo List App with Add, Complete, and Delete features

// 🎯 Tangkap elemen input, tombol, dan daftar tugas
const taskInput = document.getElementById("taskInput");
const addButton = document.getElementById("addButton");
const taskList = document.getElementById("taskList");

// ✅ Event untuk menambahkan tugas baru
addButton.addEventListener("click", function () {
  const taskText = taskInput.value; // Ambil nilai input

  if (taskText !== "") {
    // 🔧 Buat elemen <li> untuk tugas baru
    const newTask = document.createElement("li");
    newTask.textContent = taskText;

    // ✂️ Buat tombol hapus
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Hapus";
    deleteButton.classList.add("delete-button");
    newTask.appendChild(deleteButton);

    // 📋 Tambahkan tugas ke daftar
    taskList.appendChild(newTask);

    // 🔄 Kosongkan input setelah menambahkan tugas
    taskInput.value = "";
  }
});

// ✅ Event untuk menandai tugas selesai atau menghapus tugas
taskList.addEventListener("click", function (e) {
  // Jika yang diklik adalah tombol hapus
  if (e.target.classList.contains("delete-button")) {
    const taskItem = e.target.parentElement;
    taskItem.remove(); // 🗑️ Hapus elemen <li> dari DOM
  } else if (e.target.tagName === "LI") {
    // Jika yang diklik adalah elemen <li>, tandai sebagai selesai
    e.target.classList.toggle("completed");
  }
});
