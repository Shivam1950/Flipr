
const api_url ="http://api.nobelprize.org/v1/prize.json";

async function getapi(url) {
	 

	const response = await fetch(url);
	

	var data = await response.json();
	console.log(data);
	if (response) {
		hideloader();
	}
	show(data);
}
getapi(api_url);

function hideloader() {
	document.getElementById('loading').style.display = 'none';
}

function show(data) {
	let tab =
    `<tr>
    <td>prizes</td>


  </tr>`;

	for (let r of data.list) {
		tab += `<tr>
	<td>${r.prizes}</td>
	
	
</tr>`;
	}

	document.getElementById("prizes").innerHTML = tab;}

