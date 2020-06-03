[].forEach.call(document.querySelectorAll('#user-list tr'), function (el) {
	el.addEventListener('click', function() {
		var id = el.querySelector('td').textContent;
		getComment(id);
	});
});

function getUser() {
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if (xhr.status === 200) {
			var users = JSON.parse(xhr.responseText);
			console.log(users);
			var tbody = document.querySelector('u#user-list tbody');
			tbody.innerHTML = '';
			users.map(function (user) {
				var row = document.createElement('tr');
				row.addEventListener('click', function(){
					getComment(user.id);
				});
				var td = document.createElement('td');
				td.textContent = user.id;
				row.appendChild(td);
				td = document.createElement('td');
				td.textContent = user.name;
				row.appendChild(td);
				td = document.createElement('td');
				td.textContent = user.age;
				row.appendChild(td);
				td = document.createElement('td');
				td.textContent = user.married ? 'Married' : 'Single';
				row.appendChild(td);
				tbody.appendChild(row);
			});
		} else {
			console.error(xhr.responseText);
		}
	};
	xhr.open('GET', '/users');
	xhr.send();
}

function getComment(id){
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if (xhr.status === 200) {
			var comments = JSON.parse(xhr.responseText);
			var tbody = document.querySelector('#comment-list tbody');
			tbody.innerHTML = '';
			comments.map(function (comment) {
				var row = document.createElement('tr');
				var td = document.createElement('td');
				td.textContent = comment.id;
				row.appendChild(td);
				td = document.createElement('td');
				td.textContent = comment.user.name;
				row.appendChild(td);
				td = document.createElement('td');
				td.textContent = comment.comment;
				row.appendChild(td);
				var edit = document.createElement('button');
				edit.textContent = 'edit';
				edit.addEventListener('click', function(){
					var newComment = prompt('Enter the comments what you want to change.');
					if (!newComment) {
						return alert('Comments must be entered.');
					}
					var xhr = new XMLHttpRequest();
					xhr.onload = function(){
						if (xhr.status === 200) {
							console.log(xhr.responseText);
							getComment(id);
						} else {
							console.error(xhr.responseText);
						}
					};
					xhr.open('PATCH', '/comments/' +comment.id);
					xhr.setRequestHeader('Content-Type', 'application/json');
					xhr.send(JSON.stringify({comment: newComment}));
				});
				var remove = document.createElement('button');
				remove.textContent = 'delete';
				remove.addEventListener('click', function(){
					var xhr = new XMLHttpRequest();
					xhr.onload = function(){
						if (xhr.status === 200) {
							console.log(xhr.responseText);
							getComment(id);
						} else {
							console.error(xhr.responseText);
						}
					};
					xhr.open('DELETE', '/comments/' + comment.id);
					xhr.send();
				});
				td = document.createElement('td');
				td.appendChild(edit);
				row.appendChild(td);
				td = document.createElement('td');
				td.appendChild(remove);
				row.appendChild(td);
				tbody.appendChild(row);
			});
		} else {
			console.error(xhr.responseText);
		}
	};
	xhr.open('GET', '/comments/' +id);
	xhr.send();
}

document.getElementById('user-form').addEventListener('submit', function(e) {
	e.preventDefault();
	var name = e.target.username.value;
	var age = e.target.age.value;
	var married = e.target.married.checked;
	if (!name) {
		return alert('Enter a name.');
	}
	if (!age) {
		return alert('Enter a age.');
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = function(){
		if (xhr.status === 201) {
			console.log(xhr.responseText);
			getUser();
		} else {
			console.error(xhr.responseText);
		}
	};
	xhr.open('POST', '/users');
	xhr.setRequestHeader('Content-Type', 'application/json');
	xhr.send(JSON.stringify({name: name, age: age, married: married}));
	e.target.username.value = '';
	e.target.age.value = '';
	e.target.married.checked = false;
});

document.getElementById('comment-form').addEventListener('submit', function(e){
	e.preventDefault();
	var id = e.target.userid.value;
	var comment = e.target.comment.value;
	if (!id) {
		return alert('Enter your ID.');
	}
	if (!comment) {
		return alert('Enter a comment.');
	}
	var xhr = new XMLHttpRequest();
	xhr.onload = function () {
    if (xhr.status === 201) {
      console.log(xhr.responseText);
      getComment(id);
    } else {
      console.error(xhr.responseText);
    }
  };
  xhr.open('POST', '/comments');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.send(JSON.stringify({ id: id, comment: comment }));
  e.target.userid.value = '';
  e.target.comment.value = '';
});