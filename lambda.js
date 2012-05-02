var data, template, html;

			data = {
					name:  "Some Text Sites", 
		  		sites: ["Nettuts+", "Psdtuts+", "Mobiletuts+"],
		  		
		  		url : function () {  
		          return function (text, render) {  		// here text is whatever in the url 
		            text = render(text);  
		            var url = text.trim().toLowerCase().split('tuts+')[0] + '.tutsplus.com';  
		            return '<a href="' + url + '">' + text + '</a>';  
		        }  
				}
		};

		template = "<h1>{{name}}</h1><ul>{{#sites}}<li>{{#url}}{{.}}{{/url}}</li>{{/sites}}</ul>";  


		html = Mustache.to_html(template, data);

		document.write(html);