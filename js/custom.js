function initializeWidget()
{
	ZOHO.embeddedApp.on("PageLoad",function(data){
		console.log(data);
		document.getElementById("recordInfo").innerHTML = JSON.stringify(data,null,2);
	})
	/*
	 * initialize widget
	 */
	ZOHO.embeddedApp.init()
		/*
		 * fetch current users data
		 */
		.then(ZOHO.CRM.CONFIG.getCurrentUser)
		/*
		 * insert the response into the dom
		 */
		.then(function(response)
		{
			document.getElementById("userInfo").innerHTML = JSON.stringify(response,null,2);
		});
}