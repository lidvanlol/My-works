   $(function () {
	   //background change on categories 
            $("#products h2.product-name[data-type='mineralwater']").css("background-color", "#2982D0");
            $("#products h2.product-name[data-type='vitamin']").css("background-color", "#12500F");
            $("#products h2.product-name[data-type='proteinbar']").css("background-color", "#4E0F50");

            document.querySelector('#cbVitamins').addEventListener('change',function (evt) {
                updateProductView("vitamins", evt.target.checked);
            });
            document.querySelector('#cbMineralWater').addEventListener('change',function (evt) {
                updateProductView("mineralwater", evt.target.checked);
            });
            document.querySelector('#cbProtein').addEventListener('change',function (evt) {
                updateProductView("proteinbar", evt.target.checked);
            });

            $(".product-item").each(function () {
                var prodName = encodeURIComponent($(this).children("h2").text());
                var prodID = encodeURIComponent($(this).data("prod_id"));

                var link = $("<a href='product.html?prodName=" + prodName + "&prodID=" + prodID + "'/>");
                $(this).children("img").wrap(link);
            })
            
        })

        function updateProductView(categoryName, bVisible) {
            // get a list of the product items for the given category.
            // Use the data attributes to narrow the list
            var dataSelectorVal = "";
            switch (categoryName) {
            case "vitamins":
                dataSelectorVal = "h2[data-type='vitamin']";
                break;
            case "mineralwater":
                dataSelectorVal = "h2[data-type='mineralwater']";
                break;
            case "proteinbar":
                dataSelectorVal = "h2[data-type='proteinbar']";
                break;
            }
            // use the has() function to select the li tags that are product items
            // that contain the h2 tag with the corresponding data attribute value
            $(".product-item").has(dataSelectorVal).css('display', bVisible ? "" : "none");
        }
		
		
		
		
		//AJAX FUNCTION FOR GETTING dATA 
	 $(function() {
            // extract the query string parameters
            var paramLoc = window.location.href.indexOf("?");
            var paramStr = window.location.href.slice(paramLoc+1);
            var prodName = "";
            var prodID = "";
            var i = paramStr.indexOf("prodName=")+9;
            for (var j = i; j < paramStr.length; j++) {
                if (paramStr.charAt(j) == "&")
                    break;
                prodName += paramStr.charAt(j);
            }
            var i = paramStr.indexOf("prodID=")+7;
            for (var j = i; j < paramStr.length; j++) {
                if (paramStr.charAt(j) == "&")
                    break;
                prodID += paramStr.charAt(j);
            }
            prodName = decodeURIComponent(prodName);
            prodID = decodeURIComponent(prodID);
            
            // set the product name in the proper placeholder
            $("#productName").text(prodName);
            
            // retrieve the product information via AJAX
            $.getJSON("product-data.json")
                .done(function(prodData) {
                    // use the prodID to get this product information
                    prodData.products.forEach(function(elem) {
                        if (elem.prod_id == prodID) {
                            $("#productStock").text(elem.in_stock);
                            $("#productPrice").text(elem.retail_price);
                            $("#productDesc").text(elem.description);
                        }
                    });
                });
        })	
		
		
		
		
		
		