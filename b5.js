const imployes = [
  { id: 1, name: "John", age: 18, address: "New York" },
  { id: 2, name: "Mike", age: 22, address: "Canada" },
  { id: 3, name: "Linda", age: 19, address: "California" },
  { id: 4, name: "Pêtr", age: 25, address: "London" },
  { id: 5, name: "Tony", age: 17, address: "New York" },
];

imployes.forEach((person) => {
  let row = `<tr>
        <td>${person.id}</td>
        <td>${person.name}</td>
        <td>${person.age}</td>
        <td>${person.address}</td>
    </tr>`;
  document.getElementById("tableData").innerHTML += row;
});
