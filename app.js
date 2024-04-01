let submitBtn = document.getElementById("btn");

let tab_radio = document.querySelectorAll(".tab > input");
let tabPanel = document.querySelectorAll(".tab-panel");

let following_list = document.getElementById("following");
let follower_list = document.getElementById("follower");

// tab-panel[0]

let accounts_1 = [];
let accounts_2 = [];

submitBtn.addEventListener("click", (e) => {
	e.preventDefault();

	const following_list_ar = new Set(
		following_list.value
			.trim()
			.split("\n")
			.filter((_, index) => index % 2 == 0)
	);
	const follower_list_ar = new Set(
		follower_list.value
			.trim()
			.split("\n")
			.filter((_, index) => index % 2 == 0)
	);

	console.log("Accounts not following me back: ");
	following_list_ar.forEach((account) => {
		if (!follower_list_ar.has(account)) {
			accounts_1.push(account);
			console.log(account);
		}
	});

	console.log("I am not following : ");
	follower_list_ar.forEach((account) => {
		if (!following_list_ar.has(account)) {
			accounts_2.push(account);
			console.log(account);
		}
	});

	function creatingTable({ id, headingText, data }) {
		const table = document.createElement("table");
		table.setAttribute("id", id);

		const heading = document.createElement("th");
		heading.innerText = headingText;

		const heading_row = document.createElement("tr");
		heading_row.appendChild(heading);

		table.appendChild(heading_row);

		data.forEach((account) => {
			const tData = document.createElement("td");
			tData.innerText = account;
			const tRow = document.createElement("tr");
			tRow.appendChild(tData);
			table.appendChild(tRow);
		});
		return table;
	}

	tabPanel[0].appendChild(
		creatingTable({
			id: "not-in-follower-list",
			headingText: "Accounts not following you",
			data: accounts_1,
		})
	);
	tabPanel[1].appendChild(
		creatingTable({
			id: "not-in-following-list",
			headingText: "Accounts you don't follow back",
			data: accounts_2,
		})
	);
});

tab_radio.forEach((tab, index) => {
	tab.addEventListener("change", () => {
		tabPanel.forEach((tp) => {
			tp.classList.add("hidden");
		});
		tabPanel[index].classList.remove("hidden");
	});
});

const template = `
<table id="not-in-follower-list">
    <tr>
        <th>Accounts not following you</th>
    </tr>
    <tr>
        <td>Boat</td>
    </tr>
    <tr>
        <td>JBL</td>
    </tr>
    <tr>
        <td>Boat</td>
    </tr>
    <tr>
        <td>JBL</td>
    </tr>
    <tr>
        <td>Boat</td>
    </tr>
    <tr>
        <td>JBL</td>
    </tr>
</table>

`;
