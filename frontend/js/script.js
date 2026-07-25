const API = "http://localhost:3000/api/gadgets";

async function getData() {
  const res = await fetch(API);
  const data = await res.json();

  const table = document.getElementById("table-body");
  table.innerHTML = "";

  data.forEach(item => {
    table.innerHTML += `
      <tr>
        <td>${item.name}</td>
        <td>${item.brand}</td>
        <td>${item.stock}</td>
        <td>
          <button onclick="deleteData(${item.id})">Hapus</button>
        </td>
      </tr>
    `;
  });
}

async function addData() {
  const name = document.getElementById("name").value;
  const brand = document.getElementById("brand").value;
  const stock = document.getElementById("stock").value;

  if (!name || !brand || !stock) {
    alert("Semua field wajib diisi!");
    return;
  }

  await fetch(API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name,
      brand,
      stock,
      category_id: 1
    })
  });

  getData();
}

async function deleteData(id) {
  await fetch(`${API}/${id}`, {
    method: "DELETE"
  });

  getData();
}

// auto load
getData();