function initializeWidget()
{
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
		})
		/*
		 * fetch current record data 
		 */
		.then(ZOHO.CRM.INTERACTION.getPageInfo)
		/*
		 * insert the response into the dom
		 */
		.then(function(response)
		{
			document.getElementById("recordInfo").innerHTML = JSON.stringify(response,null,2);
		});

}
document.onreadystatechange = initializeWidget;