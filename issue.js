function addIssue() {
    var description = document.getElementById('issueDescription').value;
    var priority = document.getElementById('priority').value;
    var file = document.getElementById('file').value;
  
    var table = document.getElementById('issueList');
    var newRow = table.insertRow(table.rows.length);
  
    newRow.insertCell(0).innerHTML = description;
    newRow.insertCell(1).innerHTML = priority;
    newRow.insertCell(2).innerHTML = file ? `<a href="${file}" target="_blank">View File</a>` : 'N/A';
    newRow.insertCell(3).innerHTML = 'Open';
    newRow.insertCell(4).innerHTML = '<button onclick="deleteIssue(this)">Delete</button>';
  
    newRow.classList.add('priority-' + priority.toLowerCase());
  }
  
  function deleteIssue(button) {
    var row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
  }
